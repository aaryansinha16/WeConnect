import { Avatar, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'

const DropCard = ({
    _id,
    avatar, 
    userName,
    email,
    handleAddChat,
    page,
    el,
    selected
}) => {

    const {colorMode} = useColorMode()

  return (
    <HStack 
        onClick={page != 'createGrp' ? () => handleAddChat(_id) : () => handleAddChat(el)} 
        cursor='pointer' 
        transition='.2s linear' 
        borderRadius='xl' 
        justifyContent='flex-start' 
        gap='15px' 
        p={2} 
        w='100%' 
        bg={selected == 'true' ? "purple.600" : 'transparent'}
        _hover={{bg: selected != 'true' ? 'rgba(255, 255, 255, .20)' : 'purple.800'}}
        >
        <Avatar src={avatar} />
        <VStack
            spacing={0}
            alignItems='flex-start'
            justifyContent='center'
        >  
            <Text fontSize='16px' color={colorMode == 'dark' ? 'white' : 'black'}>{userName}</Text>
            <Text fontSize='12px' color={colorMode == 'dark' ? 'gray.400' : 'gray.500'}>{email}</Text>
        </VStack>
    </HStack>
  )
}

export default DropCard
