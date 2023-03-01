import { Avatar, Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, {useContext} from 'react'
import { allContext } from '../../contexts/AllContext'

const NavProfileCard = () => {
  let {user} = useContext(allContext)
  const {colorMode} = useColorMode()
  return (
    <Flex justifyContent='center' alignItems='center' w='fit-content' gap='10px' ml='30px'>
        <VStack spacing={0} textAlign='right' fontFamily='Rubik, sans-serif'>
            <Text color={colorMode == "dark" ? 'white' : "black"} fontSize='14px' className='typewriter'>Good Evening, {user != undefined ? user.user.userName : "Guest"}</Text>
            <Text color={colorMode == 'dark' ? 'whiteAlpha.600' : 'black'} fontSize='12px' className='typewriter'>{user != undefined ? user.user.email : "guest@gmail.com"}</Text>
        </VStack>

        <Avatar src={user != undefined ? user.user.avatar : 'abc'}/>
    </Flex>
  )
}

export default NavProfileCard
