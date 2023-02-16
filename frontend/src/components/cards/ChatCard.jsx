import { Avatar, AvatarBadge, Flex, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'

const ChatCard = () => {
    const {colorMode} = useColorMode()

    let str = 'Hey there!, How its going on for you? Hope you are doing well!'

  return (
    <Flex
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
            <Avatar>
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
                    <Text fontSize='16px' color={colorMode == 'dark' ? 'white' : 'black'}>Tejas Sinha</Text>
                    <Text fontSize='12px' color={colorMode == 'dark' ? 'gray.400' : 'gray.500'}>tejassinha12@gmail.com</Text>
                </VStack>
                <Text fontSize='14px' color={colorMode == 'dark' ? 'gray.200' : 'gray.800'}>{str.length > 22 ? str.split('').slice(0,22).join('') + "..." : str }</Text>
            </VStack>
        </HStack>

        <Text>16:25</Text>
    </Flex>
  )
}

export default ChatCard
