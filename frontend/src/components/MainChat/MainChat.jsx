import { Box, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import SendMessageBox from '../cards/SendMessageBox'

const MainChat = () => {
  const {colorMode} = useColorMode()
  return (
    <VStack
      // border='1px solid pink'
      bg={colorMode == 'dark' ? '#1d1e24' : 'whitesmoke'}
      borderRadius='30px 30px 0px 0px'
      alignItems='center'
      justifyContent='flex-start'
      w='52%'
      h='calc(100vh - 90px)'
      overflowY='scroll'
      className={colorMode == 'dark' ? 'mainChatDark' : 'mainChatLight'}
      // pt={8}
      // pl={8}
      // pr={8}
      // pb={ 3}
    >
      <HStack
        w='100%'
        borderRadius='30px 30px 0px 0px'
        bg={colorMode === 'dark' ? 'black' : 'gold'}
        h='50px'
      >

      </HStack>

      <VStack
        pl={8}
        pr={8}
        pb={3}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        h='100%'
      >
        <Text fontSize='30px'>Main</Text>
        <SendMessageBox />
      </VStack>
    </VStack>
  )
}

export default MainChat
