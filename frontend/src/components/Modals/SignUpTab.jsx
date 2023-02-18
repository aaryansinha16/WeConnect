import { InfoIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, Tooltip, useColorMode, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUpTab = ({onClose}) => {

  const {colorMode} = useColorMode()

  const [formData , setFormData] = useState({
    userName : "",
    email : "",
    password : "",
    avatar : ""
  })

  return (
    <VStack
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      spacing={3}
    >
      <Input
        border='none'
        bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
        type='text'
        placeholder='Username'
        p={1}
        pl={4}
        fontSize='18px'
        focusBorderColor='transparent'
      />
      <Input
        border='none'
        bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
        type='email'
        placeholder='Email'
        p={1}
        pl={4}
        fontSize='18px'
        focusBorderColor='transparent'
        isRequired
      />
      <Input
        border='none'
        bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
        type='password'
        placeholder='Password'
        p={1}
        pl={4}
        fontSize='18px'
        focusBorderColor='transparent'
        isRequired
      />

      <VStack w='100%' spacing={1} alignItems='flex-start' pt={2}>
        <label style={{fontSize:'14px', paddingLeft:'4px'}}>Upload a profile picture:</label>
        <HStack
          bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
          p={1}
          pl={2}
          pr={4}
          borderRadius={7}
        >
          <Input
            type='file'
            border='none'
            placeholder='Avatar'
            p={1}
            fontSize='18px'
            focusBorderColor='transparent'
          />
          <Tooltip label="If you don't upload an avatar/profile picture, then a random generated image would be added" aria-label='Info'>
            <InfoIcon />
          </Tooltip>
        </HStack>
      </VStack>

      <HStack
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        pt={4}
      >
        <Button variant='solid' colorScheme='green'>Create Account</Button>
        <Button variant='outline' colorScheme='purple'>Guest Login</Button>
      </HStack>
    </VStack>
  )
}

export default SignUpTab
