import { Box, Button, Flex, HStack, useColorMode, useDisclosure } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import ChatList from './components/ChatList/ChatList'
import MainChat from './components/MainChat/MainChat'
import AuthModal from './components/Modals/AuthModal'
import Navbar from './components/Navbar/Navbar'
import {io} from 'socket.io-client'
import { allContext } from './contexts/AllContext'
import axios from 'axios'


// const Socket = io.connect('https://chat-app-test.adaptable.app/', {transports: ['polling']})
// https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=
function App() {
  const {colorMode} = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  let {user} = useContext(allContext)
  axios.defaults.withCredentials = true

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem('we-connect-user-data')) || undefined
    if(userData === undefined) onOpen()
  }, [])

  function testCookie(){
    axios.post('http://localhost:3000')
    .then((res) => console.log(res))
  }

  function readCookie(){
    axios.get('http://localhost:3000')
    .then((res) => console.log(res))
  }
  return (
    <Box className="App" bg={colorMode == "dark" ? "black" : "teal"} p={{base:'3px', sm: '7px'}} h='100vh' overflow='hidden'>
      <Navbar />
      {/* <Button onClick={testCookie}>logout</Button>
      <Button onClick={readCookie}>Test</Button> */}
      <Flex
        justifyContent='flex-start'
        alignItems='flex-start'
        w='100%'
        // m='auto'
        bg={colorMode == 'dark' ? "#20232b" : 'white'}
        pt='10px'
        gap={{md : '5px', lg: '15px'}}
      >
        <ChatList />
        <MainChat />
        <About />
      </Flex>
      <AuthModal isOpen={isOpen} onClose={onClose}/>
    </Box>
  )
}

export default App
