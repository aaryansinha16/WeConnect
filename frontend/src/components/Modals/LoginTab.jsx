import { Button, FormControl, HStack, Input, useColorMode, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

const LoginTab = ({onClose}) => {

  const {colorMode} = useColorMode()
  const toast = useToast()

  const [formData , setFormData] = useState({
    email : "",
    password : ""
  })

  async function handlePost(){
    return await axios.post('http://localhost:3000/auth/login', formData)
  }

  const handleFormSubmit = (from) => {
    console.log(from)
    if(from === 'guest'){
      console.log('this is from guest', {email : 'guest@gmail.com', password: '123'})
      onClose()
      return
    }

    console.log(formData, 'this is form data')
    var flag = false
    // formData.email.map((el) => el == '@' && (flag = true))
    for(var i = 0; i<formData.email.length ; i++){
      if(formData.email[i] == '@') flag = true
    }
    if(!flag){
      toast({
        title : "Enter a correct email", 
        status : 'error',
        duration : 5000,
        isClosable : true
      })
      return
    }

    if(formData.email.length == 0 || formData.password.length == 0){
      toast({
        title: "Enter a vaild email Or password",
        status : 'error',
        duration : 5000,
        isClosable : true
      })
    }

    handlePost()
    .then((res) => console.log(res, 'this is response'))
    .catch((e) => console.log(e, 'this is error')) 
    // console.log(formData)
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
