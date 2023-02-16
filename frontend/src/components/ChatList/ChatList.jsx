import { Flex } from '@chakra-ui/react'
import React from 'react'
import Search from '../cards/Search'

const ChatList = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      w='25%'
      bg="#20232b"
      // border='1px solid white'
      h='500px'
      // mt='75vh'
    >
      <Search />
    </Flex>
  )
}

export default ChatList
