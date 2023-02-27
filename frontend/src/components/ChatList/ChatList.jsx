import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import ChatCard from '../cards/ChatCard'
import Search from '../cards/Search'
import axios from 'axios'

let userData = JSON.parse(localStorage.getItem('we-connect-user-data'))
const ChatList = () => {
  const {colorMode} = useColorMode()
  const [allChat , setAllChat] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/chat' , {
      headers : {
        Authorization : userData.token
      }
    })
    .then((res) => setAllChat(res.data))
  }, [])
  
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
      gap='30px'
    >
      <Search />

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
