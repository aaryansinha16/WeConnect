import { Button, FormControl, HStack, Input, useColorMode, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const LoginTab = ({onClose}) => {

  const {colorMode} = useColorMode()

  const [formData , setFormData] = useState({
    email : "",
    password : ""
  })

  const handleFormSubmit = (from) => {
    console.log(from)
    if(from === 'guest'){
      console.log('this is from guest', {email : 'test@gmail.com', password: '123'})
      onClose()
      return
    }
    console.log(formData)
  }

  return (
    <VStack
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      spacing={3}
    >
      <FormControl isRequired>
        <Input
          border='none'
          bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
          type='email'
          placeholder='Email'
          p={1}
          pl={4}
          fontSize='18px'
          focusBorderColor='transparent'
          onChange={(e) => setFormData({...formData , email : e.target.value})}
        />
      </FormControl>
      <Input
        border='none'
        bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
        type='password'
        placeholder='Password'
        p={1}
        pl={4}
        fontSize='18px'
        focusBorderColor='transparent'
        onChange={(e) => setFormData({...formData , password : e.target.value})}
        required
      />

      <HStack
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        pt={4}
      >
        <Button variant='solid' colorScheme='green' onClick={handleFormSubmit}>Login</Button>
        <Button variant='outline' colorScheme='purple' onClick={() => handleFormSubmit("guest")}>Guest Login</Button>
      </HStack>
    </VStack>
  )
}

export default LoginTab
