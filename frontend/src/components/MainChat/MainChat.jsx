import { InfoIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import SendMessageBox from '../cards/SendMessageBox'

const MainChat = () => {
  const {colorMode} = useColorMode()
  return (
    <VStack
      bg={colorMode == 'dark' ? '#1d1e24' : 'whitesmoke'}
      borderRadius='30px 30px 0px 0px'
      alignItems='center'
      justifyContent='flex-start'
      w='52%'
      h='calc(100vh - 90px)'
      overflowY='scroll'
      className={colorMode == 'dark' ? 'mainChatDark' : 'mainChatLight'}
    >
      <HStack
        justifyContent='space-between'
        w='100%'
        borderRadius='30px 30px 0px 0px'
        bg={colorMode === 'dark' ? 'black' : 'gold'}
        p='10px 25px 10px 25px'
      >
        <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}><Avatar name='Tejas Sinha' size='sm' mr='10px' bg='tomato' />Conversation with <span style={{fontWeight:'500', color:colorMode == 'dark' ? 'white' : 'indigo', paddingLeft:'4px', cursor:'pointer'}} >{" "}Tejas Sinha</span></Text>
        <InfoIcon />
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
