import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import ChatCard from '../cards/ChatCard'
import Search from '../cards/Search'
import axios from 'axios'
import SearchDropdown from './SearchDropdown/SearchDropdown'
import { PlusSquareIcon } from '@chakra-ui/icons'

let userData = JSON.parse(localStorage.getItem('we-connect-user-data'))
const ChatList = () => {
  const {colorMode} = useColorMode()
  const [render, setRender] = useState(true)
  const [allChat , setAllChat] = useState([])
  const [search , setSearch] = useState("")
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/chat' , {
      headers : {
        Authorization : userData.token
      }
    })
    .then((res) => setAllChat(res.data))
    console.log('test trigger')
  }, [render])

  useEffect(() => {
    if(search.length != 0){
      axios.get(`http://localhost:3000/user?search=${search}`, {
        headers : {
          Authorization : userData.token
        }
      })
      .then((res) => setSearchList(res.data))
    }else setSearchList([])
  }, [search])

  const handleAddChat = (participantId) => {
    axios.post('http://localhost:3000/chat', {participantId}, {
      headers : {
        Authorization : userData.token
      }
    })
    .then((res) => {
      setRender(!render)
      setSearchList([])
      console.log(res.data, 'this is add chat')
    }).catch((e) => console.log(e, 'addchat error'))
  }
  
  return (
    <Flex
      className={colorMode == 'dark' ? 'chatListDark' : 'chatListLight'}
      flexDir='column'
      justifyContent='flex-start'
      alignItems='center'
      w='25%'
      // bg={"#20232b"}
      p={'20px'}
      spacing='30px'
      h='calc(100vh - 80px)'
      overflowY='scroll'
      gap='10px'
    >
      <Box pb='10px' mt='-20px' w='100%'>
        <Button w='100%' variant='solid' colorScheme='blue' gap='10px'>Create a new Group <PlusSquareIcon /></Button>
      </Box>
      <Search setSearch={setSearch}/>
      <SearchDropdown searchList={searchList} handleAddChat={handleAddChat}/>


      <Accordion w='100%' allowMultiple defaultIndex={[0]}>
        <AccordionItem border='none'>
            <AccordionButton _hover={{bg : colorMode == 'dark' ? 'gray.900' : 'gray.200'}}>
              <Box as="span" flex='1' textAlign='left' fontFamily='Rubik'>
                <Text fontFamily='Rubik' fontSize='14px' color={colorMode =='dark' ? 'gray.300' : 'gray.700'}>Unread</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} >
            {/* <ChatCard /> */}
            {
              allChat?.map((el) => (
                <ChatCard key={el._id} {...el}/>
              ))
            }
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border='none'>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Text fontFamily='Rubik' fontSize='14px' color={colorMode =='dark' ? 'gray.300' : 'gray.700'}>Read</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border='none'>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Text fontFamily='Rubik' fontSize='14px' color={colorMode =='dark' ? 'gray.300' : 'gray.700'}>Groups</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default memo(ChatList)
