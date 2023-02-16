import { Box, Flex, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import ChatList from './components/ChatList/ChatList'
import MainChat from './components/MainChat/MainChat'
import Navbar from './components/Navbar/Navbar'

function App() {
  const {colorMode} = useColorMode()
  return (
    <Box className="App" bg={colorMode == "dark" ? "black" : "white"} pt='7px'>
      <Navbar />
      <Flex
        justifyContent='space-between'
        alignItems='center'
        // border='1px solid red'
        w='100%'
        // m='auto'
        bg="#20232b"
      >
        <ChatList />
        <MainChat />
        <About />
      </Flex>
    </Box>
  )
}

export default App
