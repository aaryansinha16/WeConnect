import { Button, FormControl, HStack, Input, useColorMode, useToast, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { allContext } from '../../contexts/AllContext'

let URL = 'https://chat-app-test.adaptable.app'
let DEV_URL = 'http://localhost:3000'

const LoginTab = ({onClose}) => {

  const {colorMode} = useColorMode()
  const toast = useToast()
  const {setGlobalRender} = useContext(allContext)

  const [formData , setFormData] = useState({
    email : "",
    password : ""
  })
  const [loading ,setLoading] = useState(false)

  async function handlePost(){
    return await axios.post(`${DEV_URL}/auth/login`, formData)
  }

  const handleFormSubmit = (from) => {
    setLoading(true)
    if(from === 'guest'){
      setGlobalRender((prev) => !prev)
      setLoading(false)
      onClose()
      return
    }

    var flag = false
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
      setLoading(false)
      return
    }

    if(formData.email.length == 0 || formData.password.length == 0){
      toast({
        title: "Enter a vaild email Or password",
        status : 'error',
        duration : 5000,
        isClosable : true
      })
      setLoading(false)
    }

    handlePost()
    .then((res) => {
      localStorage.setItem("we-connect-user-data", JSON.stringify(res.data))
      toast({
        status: 'success',
        title: 'Hurray! Login successfull',
        description : 'Keep chatting!',
        duration : 5000,
        isClosable : true
      })
      setLoading(false)
      setGlobalRender((prev) => !prev)
      onClose()
    })
    .catch((e) => {
      console.error(e)
      toast({
        status : 'error', 
        title : e.response.data.message,
        duration : 4000,
        isClosable : true
      })
      setGlobalRender((prev) => !prev)
      setLoading(false)
    }) 
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
        <Button variant='solid' colorScheme='green' onClick={handleFormSubmit} isLoading={loading}>Login</Button>
        <Button variant='outline' colorScheme='purple' onClick={() => handleFormSubmit("guest")}>Guest Login</Button>
      </HStack>
    </VStack>
  )
}

export default LoginTab
