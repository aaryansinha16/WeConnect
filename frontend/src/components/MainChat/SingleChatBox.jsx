import { Box, Spinner, useColorMode, useToast, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ReceiverMsg from '../cards/ReceiverMsg'
import SenderMsg from '../cards/SenderMsg'
import axios from 'axios'
import { allContext } from '../../contexts/AllContext'
import SendMessageBox from '../cards/SendMessageBox'
import io from 'socket.io-client'
import { decryptMessage, encryptMessage } from '../../encryption'

let socket 
let checkChat
const SingleChatBox = () => {
    const {colorMode} = useColorMode()
    const toast = useToast()
    const {selectChat, user , setGlobalRender} = useContext(allContext)
    const [allMessages, setAllMessages] = useState([])
    const [loading ,setLoading ] = useState(false)
    const [newMessage ,setNewMessage] = useState("")
    const [render, setRender] = useState(false)
    const [socketStatus, setSocketStatus] = useState(false)

    useEffect(() => {
        socket = io('http://localhost:3000')
        socket.emit("new-user-setup" , user.user)
        socket.on("connected", () => setSocketStatus(true))
        // socket.on("typing" , () =>)
        // socket.on("typing stop", () => )
    }, [])

    useEffect(() => {
        socket.on("message received", (newMsg) => {
            if(!checkChat || checkChat._id !== newMsg.chatWith._id){

            }else{
                let decryptedMessage = decryptMessage(newMsg.message)
                newMsg = {...newMsg, message : decryptedMessage}
                setAllMessages([...allMessages , newMsg])
                setGlobalRender((prev) => !prev)
            }
        })
    }) //! POTENTIAL BUG (DEPENDENCY ARRAY)

    useEffect(() => {
        if(Object.keys(selectChat).length > 0){
            setLoading(true)
            axios.get(`http://localhost:3000/messages/get-all-messages/${selectChat._id}`, {
                headers : {
                    Authorization : user.token
                }
            })
            .then((res) => {
                res.data.allMessages.map((el) => el.message = decryptMessage(el.message))
                setAllMessages(res.data.allMessages)
                setLoading(false)
                socket.emit("enter chat", selectChat._id)
            })
            .catch((e) => {
                console.log(e, 'this is all messages error')
                toast({
                    title : 'Some error occured',
                    description : 'Messages not loaded',
                    status : "warning",
                    duration: 4000,
                    isClosable : true
                })
                setLoading(false)
            })
            checkChat = selectChat
        }
    }, [selectChat, render])


    const handleNewMessage = async (e) => {
        if(e.target.alt == 'sendIcon' || e.key == "Enter"){
            if(newMessage.length  == 0){
                return toast({
                    title : 'Write some message to send',
                    status : 'info',
                    duration : 4000,
                    isClosable : true
                })
            }

            let encryptedMessage = encryptMessage(newMessage)

            await axios.post('http://localhost:3000/messages/send-message', {chatId : selectChat._id, message : encryptedMessage} , {
                headers : {
                    Authorization : user.token
                }
            })
            .then((res) => {
                setNewMessage("")
                socket.emit("new message", res.data)
                var myMsg = res.data
                var decryptedMyMsg = decryptMessage(myMsg.message)
                myMsg = {...myMsg, message : decryptedMyMsg}
                setAllMessages([...allMessages, myMsg])
                // setRender((prev) => !prev)
                setGlobalRender((prev) => !prev)
            })
            .catch((e) => console.log(e, 'new message error'))
        }
    }
    
  return (
    <>
        <Box as={VStack} maxHeight={'calc(100vh - 29vh)'}  spacing='6px' h='calc(100% - 55px)' w='100%' overflowY='scroll' p={1} className={colorMode == 'dark' ? 'mainChatDark' : 'mainChatLight'}>
            {
                !loading ? 
                allMessages?.map((el, i) => {
                    if(el.sender._id == user.user._id){
                        return <ReceiverMsg key={i} {...el}/>
                    }
                    else if(el.sender._id !== user.user._id){
                        return <SenderMsg key={i} {...el}/>
                    } 
                })
                :
                <Spinner size='xl'/>
            }
        </Box>
        <SendMessageBox setNewMessage={setNewMessage} newMessage={newMessage} handleNewMessage={handleNewMessage}/>
    </>
  )
}

export default SingleChatBox
