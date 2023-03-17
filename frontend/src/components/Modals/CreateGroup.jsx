import { CloseIcon, PlusSquareIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Badge, Button, Flex, FormControl, Grid, IconButton, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useColorMode, useToast, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { allContext } from '../../contexts/AllContext'
import DropCard from '../ChatList/SearchDropdown/DropCard'
import Atropos from 'atropos/react'

let URL = 'https://chat-app-test.adaptable.app'
let DEV_URL = 'http://localhost:3000'
const CreateGroup = ({isOpen, onClose, setRender}) => {
    const toast = useToast()
    const {colorMode} = useColorMode()
    let {user} = useContext(allContext)

    const [search, setSearch ] = useState("")
    const [searchList, setSearchList] = useState([])
    const [loading , setLoading] = useState(false)
    const [memberAdded, setMemberAdded] = useState([])
    const [groupTitle, setGroupTitle] = useState("")

    //Function to handle search and results
    useEffect(() => {
        if(search.length != 0 && user != undefined){
          axios.get(`${URL}/user?search=${search}`, {
            headers : {
                Authorization : user.token 
            }
          })
          .then((res) => setSearchList(res.data))
        }else setSearchList([])
      }, [search, user])

    //Main function to create the group
    const handleCreateGroup = async () => {
        setLoading(true)
        if(!memberAdded || !groupTitle){
            return toast({
                title: 'Group title and Adding members is required to create group',
                status : 'warning',
                duration : 5000,
                isClosable : true
            })
        }
        if(memberAdded.length < 2){
            return toast({
                title : 'You need to select atleast 2 members to create a group',
                status : 'warning',
                duration : 5000,
                isClosable : true
            })
        }

        await axios.post(`${URL}/chat/create-group`, {
            groupTitle: groupTitle,
            members : JSON.stringify(memberAdded.map((el) => el._id))
        }, {
            headers : {
                Authorization : user.token
            }
        })
        .then((res) => {
            toast({
                title:'Group Created!',
                status : 'success',
                duration : 5000,
                isClosable: true
            })
            setLoading(false)
            setRender((prev) => !prev)
            onClose()
        }).catch((e) => {
            setLoading(false)
            toast({
                title : 'Some error occured while creating group',
                description : 'Please try again later',
                status : 'error',
                duration : 5000,
                isClosable: true
            })
        })

    }


    //Function to remove the member before adding
    const handleRemoveMember = (memberToRemove) => {
        let updatedMembers = memberAdded.filter((el) => el._id != memberToRemove._id)
        setMemberAdded(updatedMembers)
    }

    //Function to add the members to group
    const handleAddMembers = (member) => {
        var flag = false
        memberAdded.map((el) => {
            if(el._id == member._id){
                toast({
                    title: 'This member is already present in the GroupList',
                    status : 'info',
                    duration : 4000,
                    isClosable : true
                })
                flag = true
                return
            }
        })
        if(flag) return

        setMemberAdded([...memberAdded , member])
    }

  return (
    <Modal
    isCentered
    onClose={onClose}
    isOpen={isOpen}
    motionPreset='slideInBottom'
    // scrollBehavior='inside'
    >
        <ModalOverlay />
        <ModalContent>
        <Atropos
            activeOffset={30}
            shadow={false}
          >
            <ModalHeader>Create Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <FormControl isRequired mb={memberAdded.length == 0 ? '10px' : '0px'}>
                    <Input type='text' placeholder='Enter group title' onChange={(e) => setGroupTitle(e.target.value)}/>
                </FormControl>
                <Flex flexWrap='wrap' w='100%' pt={4} pb={4} gap='10px' justifyContent='center'>
                    {
                        memberAdded?.map((el) => (
                            <Badge key={el._id} p={1} as={Flex} gap='20px' textTransform='capitalize'>
                                {el.userName} 
                                <IconButton w='20px' size='10px' p={1} icon={<CloseIcon w='10px'/>} onClick={() => handleRemoveMember(el)}/> 
                            </Badge>
                        ))
                    }
                </Flex>
                <FormControl position='relative' zIndex='10'>
                    <InputGroup>
                        <Input type='text' placeholder='Search and Add members' onChange={(e) => setSearch(e.target.value)} />
                        {
                            searchList != 0 &&
                            <InputRightElement children={
                                <Tooltip label='Reset'>
                                    <SmallCloseIcon cursor='pointer'  _hover={{bg: 'gray'}} onClick={() => setSearch("")}/>
                                </Tooltip>
                            }/>
                        }
                    </InputGroup>
                    <VStack 
                        w='inherit' 
                        position='absolute' 
                        top='110%'
                        bgColor={colorMode == 'dark' ? 'rgba(0, 0, 0, .55)' : 'rgba(255, 255, 255, .55)' }
                        style={{backdropFilter: 'blur(5px)'}}
                        overflowY='scroll'
                        maxHeight='300px'
                    >
                        {
                            searchList.map((el) => {
                                let data = memberAdded.filter((usr) => usr._id == el._id)
                                if(data.length != 0){
                                    return <DropCard key={el._id} {...el} handleAddChat={handleAddMembers} page='createGrp' el={el} selected='true'/>
                                } 
                                return <DropCard key={el._id} {...el} handleAddChat={handleAddMembers} page='createGrp' el={el}/>
                            })
                        }
                    </VStack>
                </FormControl>

            </ModalBody>
            <ModalFooter justifyContent='center'>
                <Button isLoading={loading} variant='solid' colorScheme='blue' gap='5px' onClick={handleCreateGroup}>Create <PlusSquareIcon /> </Button>
            </ModalFooter>
            </Atropos>
        </ModalContent>
    </Modal>
  )
}

export default CreateGroup
