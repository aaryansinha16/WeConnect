import { Avatar, Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'

const NavProfileCard = () => {
    const {colorMode} = useColorMode()
  return (
    <Flex justifyContent='center' alignItems='center' w='fit-content' gap='10px' ml='30px'>
        <VStack spacing={0} textAlign='right' fontFamily='Rubik, sans-serif'>
            <Text color={colorMode == "dark" ? 'white' : "black"} fontSize='14px' className='typewriter'>Good Evening, Aaryan</Text>
            <Text color={colorMode == 'dark' ? 'whiteAlpha.600' : 'black'} fontSize='12px' className='typewriter'>aaryansinha16@gmail.com</Text>
        </VStack>

        <Avatar src='https://bit.ly/dan-abramov'/>
    </Flex>
  )
}

export default NavProfileCard
