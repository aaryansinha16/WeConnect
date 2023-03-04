import { Avatar, AvatarBadge, Flex, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { allContext } from '../../contexts/AllContext'
import { decryptMessage } from '../../encryption'

const ChatCard = ({
    groupChatType,
    users,
    updatedAt,
    name,
    recentMessage,
    el
}) => {
    const {colorMode} = useColorMode()
    const {setSelectChat, user} = useContext(allContext)

    let participent = users.filter((el) => el._id !== user.user._id)

    let str = 'Start chatting!'

    //? Logic for last updated chat time
    let updatedTime = new Date(updatedAt).toLocaleTimeString()
    let timeZone = updatedTime[updatedTime.length -2] == "A" ? "AM" : "PM"
    updatedTime = updatedTime[5] == ":" ? updatedTime.slice(0, 5)  : updatedTime.slice(0, 4)

  return (
    <Flex
        onClick={() => setSelectChat(el)}
        cursor='pointer'
        justifyContent='space-between'
        alignItems='flex-start'
        gap='10px'
        w='100%'
        borderRadius='12px'
        p="8px 12px 8px 12px"
        bg='transparent'
        _hover={{
            bg : colorMode == 'dark' ? '#16171b' : 'gray.300'
        }}
    >
        <HStack
            justifyContent='center'
            alignItems='center'
            gap={1}
        >
            <Avatar src={participent[0].avatar} size='md'>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>

            <VStack
                justifyContent='space-between'
                alignItems='flex-start'
                spacing={1}
            >
                <VStack 
                    spacing={0}
                    alignItems='flex-start'
                    justifyContent='center'
                >
                    <Text fontSize='14px' color={colorMode == 'dark' ? 'white' : 'black'}>{groupChatType ? name : participent[0].userName}</Text>
                    <Text fontSize='12px' color={colorMode == 'dark' ? 'gray.400' : 'gray.500'}>{groupChatType ? `${users.length} members` : participent[0].email}</Text>
                </VStack>
                <Text textAlign='left' fontSize='12px' color={colorMode == 'dark' ? 'gray.200' : 'gray.800'}>{recentMessage ? decryptMessage(recentMessage.message).length > 22 ? decryptMessage(recentMessage.message).split('').slice(0,22).join('') + "..." : decryptMessage(recentMessage.message) : str }</Text>
            </VStack>
        </HStack>

        <Text fontSize='sm'>{updatedTime + " " + timeZone}</Text>
    </Flex>
  )
}

export default ChatCard
