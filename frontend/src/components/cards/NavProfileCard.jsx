import { Avatar, Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'

const NavProfileCard = () => {
  let userData = JSON.parse(localStorage.getItem("we-connect-user-data")) || undefined
    const {colorMode} = useColorMode()
  return (
    <Flex justifyContent='center' alignItems='center' w='fit-content' gap='10px' ml='30px'>
        <VStack spacing={0} textAlign='right' fontFamily='Rubik, sans-serif'>
            <Text color={colorMode == "dark" ? 'white' : "black"} fontSize='14px' className='typewriter'>Good Evening, {userData != undefined ? userData.user.userName : "Guest"}</Text>
            <Text color={colorMode == 'dark' ? 'whiteAlpha.600' : 'black'} fontSize='12px' className='typewriter'>{userData != undefined ? userData.user.email : "guest@gmail.com"}</Text>
        </VStack>

        <Avatar src={userData != undefined ? userData.user.avatar : 'abc'}/>
    </Flex>
  )
}

export default NavProfileCard
