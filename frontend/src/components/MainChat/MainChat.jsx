import { InfoIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { allContext } from '../../contexts/AllContext'
import SendMessageBox from '../cards/SendMessageBox'
import SenderMsg from '../cards/SenderMsg.jsx'
import ReceiverMsg from '../cards/ReceiverMsg'

const MainChat = () => {
  const {colorMode} = useColorMode()
  const {selectChat} = useContext(allContext)

  let messageData = [
    {
      message : 'Hey vincent!',
      type : 'sender'
    },
    {
      message : 'yo dude! How are you?',
      type : 'receiver'
    },
    {
      message :"Fine, just wanted to ask, how do you manage the seamless messenging in your app?",
      type : 'sender'
    },
    {
      message : 'I use css effeciently, plus you can just go through some docs to know more',
      type : 'receiver'
    },
    {
      message : 'Please let me know if you are stuck somewhere, I am here for you!',
      type : 'receiver'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    },
    {
      message : 'I will! thanks buddy',
      type : 'sender'
    }
  ]

  // console.log(selectChat, Object.keys(selectChat).length)
  if(Object.keys(selectChat).length > 0){
    return (
      <VStack
        display={{base : Object.keys(selectChat).length != 0 ? "flex" : 'none' , md : 'VStack'}}
        bg={colorMode == 'dark' ? '#1d1e24' : 'whitesmoke'}
        borderRadius='30px 30px 0px 0px'
        alignItems='center'
        justifyContent='space-between'
        w={{base: '100%', md: '65%', lg : '52%'}}
        h='calc(100vh - 100px)'
        // border='1px solid white'
      >
        <HStack
          justifyContent='space-between'
          w='100%'
          borderRadius='30px 30px 0px 0px'
          bg={colorMode === 'dark' ? 'black' : 'gold'}
          p='10px 25px 10px 25px'
        >
          {
            selectChat.groupChatType == false ? 
            <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}>
              <Avatar name={selectChat.users[0].userName} src={selectChat.users[0].avatar} size='sm' mr='10px' bg='tomato' />
              Conversation with <span style={{fontWeight:'500', color:colorMode == 'dark' ? 'white' : 'indigo', paddingLeft:'4px', cursor:'pointer'}} >
                {" "}{selectChat.users[0].userName}</span>
            </Text>
            :
            <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}>
              {/* <Avatar name='Tejas Sinha' size='sm' mr='10px' bg='tomato' /> */}
              {selectChat.name}
            </Text>
            
          }
          <InfoIcon />
        </HStack>
  
        <VStack
          pl={4}
          pr={4}
          pb={3}
          justifyContent='space-between'
          alignItems='center'
          w='100%'
          h='100%'
        >
          <Box as={VStack} maxHeight={'calc(100vh - 29vh)'}  spacing='6px' h='calc(100% - 55px)' w='100%' overflowY='scroll' p={1} className={colorMode == 'dark' ? 'mainChatDark' : 'mainChatLight'}>
            {
              messageData.map((el) => {
                if(el.type == 'sender'){
                  return <SenderMsg message={el.message}/>
                }
                else if(el.type == 'receiver'){
                  console.log(el.message, 'message')
                  return <ReceiverMsg message={el.message}/>
                } 
              })
            }
          </Box>
          <SendMessageBox />
        </VStack>
      </VStack>
    )
  }

  return (
    <VStack
      display={{base : Object.keys(selectChat).length != 0 ? "flex" : 'none' , md : 'flex'}}
      bg={colorMode == 'dark' ? '#1d1e24' : 'whitesmoke'}
      borderRadius='30px 30px 0px 0px'
      alignItems='center'
      justifyContent='space-between'
      w={{base: '100%', md: '72%', lg : '52%'}}
      h='calc(100vh - 90px)'
      overflowY='scroll'
      className={colorMode == 'dark' ? 'mainChatDark' : 'mainChatLight'}
    >
      <HStack
        justifyContent='space-between'
        w='100%'
        borderRadius='30px 30px 0px 0px'
        bg={colorMode === 'dark' ? 'black' : 'gold'}
        p='10px 25px 10px 25px'
      >
        <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}><Avatar name='We connect' size='sm' mr='10px' bg='messenger.600' />About <span style={{fontWeight:'500', color:colorMode == 'dark' ? 'white' : 'indigo', paddingLeft:'4px', cursor:'pointer'}} >{" "}We Connect</span></Text>
        <InfoIcon />
      </HStack>

      <VStack
        pl={8}
        pr={8}
        pb={3}
        justifyContent='center'
        alignItems='center'
        w='100%'
        h='100%'
      >
        <Text fontSize='30px'>Select any chat</Text>
        {/* <SenderMsg /> */}
      </VStack>
      <SendMessageBox />
    </VStack>
  )
}

export default MainChat
