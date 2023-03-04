import { InfoIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { allContext } from '../../contexts/AllContext'
import SendMessageBox from '../cards/SendMessageBox'
import SingleChatBox from './SingleChatBox'
import GroupAvatar from '../../assets/groupAvatar.png'
import TypingLoader from '../TypingLoader/TypingLoader'

const MainChat = () => {
  const {colorMode} = useColorMode()
  const {selectChat, user} = useContext(allContext)

  // let allUsers = selectChat.users
  let participant = selectChat?.users?.filter((el) => el._id !== user.user._id)

  if(Object.keys(selectChat).length > 0){
    return (
      <VStack
        display={{base : Object.keys(selectChat).length != 0 ? "flex" : 'none' , md : 'VStack'}}
        bg={colorMode == 'dark' ? '#1d1e24' : 'whitesmoke'}
        borderRadius='30px 30px 0px 0px'
        alignItems='center'
        justifyContent='space-between'
        w={{base: '100%', md: '65%', lg : '52%'}}
        h='calc(100vh - 100px)'
      >
        <HStack
          justifyContent='space-between'
          w='100%'
          borderRadius='30px 30px 0px 0px'
          bg={colorMode === 'dark' ? 'black' : 'gold'}
          p='10px 25px 10px 25px'
        >
          {
            selectChat.groupChatType == false ? 
            <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}>
              <Avatar name={participant[0].userName} src={participant[0].avatar} size='sm' mr='10px' bg='tomato' />
              Conversation with <span style={{fontWeight:'500', color:colorMode == 'dark' ? 'white' : 'indigo', paddingLeft:'4px', cursor:'pointer'}} >
                {" "}{participant[0].userName}</span>
            </Text>
            :
            <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}>
              <Avatar name='Group Chat' src={GroupAvatar} size='sm' mr='10px' bg='tomato' />
              {selectChat.name}
            </Text>
            
          }
          <InfoIcon />
        </HStack>
          {/* <TypingLoader /> */}
        <VStack
          pl={4}
          pr={4}
          pb={3}
          justifyContent='space-between'
          alignItems='center'
          w='100%'
          h='100%'
        >
          <SingleChatBox/>
          {/* <SendMessageBox /> */}
        </VStack>
      </VStack>
    )
  }

  return (
    <VStack
      display={{base : Object.keys(selectChat).length != 0 ? "flex" : 'none' , md : 'flex'}}
      bg={colorMode == 'dark' ? '#1d1e24' : 'whitesmoke'}
      borderRadius='30px 30px 0px 0px'
      alignItems='center'
      justifyContent='space-between'
      w={{base: '100%', md: '72%', lg : '52%'}}
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
        <Text as={Flex} alignItems='center' fontSize='16px' fontWeight='light' color={colorMode == 'dark' ? 'gray.400' : 'white'}><Avatar name='We connect' size='sm' mr='10px' bg='messenger.600' />About <span style={{fontWeight:'500', color:colorMode == 'dark' ? 'white' : 'indigo', paddingLeft:'4px', cursor:'pointer'}} >{" "}We Connect</span></Text>
        <InfoIcon />
      </HStack>

      <VStack
        pl={8}
        pr={8}
        pb={3}
        justifyContent='center'
        alignItems='center'
        w='100%'
        h='100%'
      >
        <Text fontSize='30px'>Select any chat</Text>
        {/* <SenderMsg /> */}
        {/* <SendMessageBox /> */}
      </VStack>
    </VStack>
  )
}

export default MainChat
