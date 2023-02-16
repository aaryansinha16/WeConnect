import { Box, Flex, HStack, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import ChatList from './components/ChatList/ChatList'
import MainChat from './components/MainChat/MainChat'
import Navbar from './components/Navbar/Navbar'

function App() {
  const {colorMode} = useColorMode()
  return (
    <Box className="App" bg={colorMode == "dark" ? "black" : "yellow"} p='7px' h='100vh' overflow='hidden'>
      <Navbar />
      <Flex
        justifyContent='flex-start'
        alignItems='flex-start'
        w='100%'
        // m='auto'
        bg={colorMode == 'dark' ? "#20232b" : 'white'}
      >
        <ChatList />
        <MainChat />
        <About />
      </Flex>
    </Box>
  )
}

export default App
