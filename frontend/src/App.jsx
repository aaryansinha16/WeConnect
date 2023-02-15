import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import ChatList from './components/ChatList/ChatList'
import MainChat from './components/MainChat/MainChat'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Flex
        justifyContent='space-between'
        alignItems='center'
        border='1px solid red'
        w='100%'
        // m='auto'
        h='200px'
      >
        <ChatList />
        <MainChat />
        <About />
      </Flex>
    </div>
  )
}

export default App
