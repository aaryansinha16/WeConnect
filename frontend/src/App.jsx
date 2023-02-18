import { Box, Flex, HStack, useColorMode, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About/About'
import ChatList from './components/ChatList/ChatList'
import MainChat from './components/MainChat/MainChat'
import AuthModal from './components/Modals/AuthModal'
import Navbar from './components/Navbar/Navbar'
import {io} from 'socket.io-client'


const Socket = io.connect('https://chat-app-test.adaptable.app/', {transports: ['polling']})
function App() {
  const {colorMode} = useColorMode()
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("we-connect-user-data")) || undefined
    if(userData === undefined) onOpen()

    Socket.on("new-connection", (d) => {
      console.log("Server said: ", d)
    })
  }, [])
  return (
    <Box className="App" bg={colorMode == "dark" ? "black" : "teal"} p='7px' h='100vh' overflow='hidden'>
      <Navbar />
      <Flex
        justifyContent='flex-start'
        alignItems='flex-start'
        w='100%'
        // m='auto'
        bg={colorMode == 'dark' ? "#20232b" : 'white'}
        pt='10px'
        gap='15px'
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
