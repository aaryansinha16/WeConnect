import { InfoIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, HStack, Input, Spinner, Tooltip, useColorMode, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import Gallery from '../../assets/image.png'

const SignUpTab = ({onClose}) => {

  const {colorMode} = useColorMode()
  const toast = useToast()

  const [avatar , setAvatar] = useState("abc")
  const [visb , setVisb] = useState(false)
  const [loading ,setLoading ] = useState(false)

  const [formData , setFormData] = useState({
    userName : "",
    email : "",
    password : "",
    avatar : ""
  })

  function handleChangeFile(avatar){
    setLoading(true)
    if(avatar == undefined){
      toast({
        title : "Invalid image type",
        status : "error",
        duration : 4000,
        isClosable : true
      })
      return
    }

    if(avatar.type == 'image/jpeg' || avatar.type == 'image/png'){

      console.log(avatar.type)
      let data = new FormData()
      data.append("file" , avatar)
      data.append('upload_preset', 'weconnect')
      data.append('cloud_name', 'dvhzuysvf')

      axios.post("https://api.cloudinary.com/v1_1/dvhzuysvf/image/upload", data)
      .then((res) => {
        setAvatar(res.data.url)
        setFormData({
          ...formData,
          avatar : res.data.url
        })
        setLoading(false)
        toast({
          title : 'Uploaded profile image successfully',
          status : 'success',
          duration : 4000,
          isClosable : true
        })
      })
      .catch((e) => {
        toast({
          title: 'Something went wrong',
          description : 'Try uploading again or do it later',
          duration : 5000,
          isClosable : true,
          status : 'error'
        })
      })
      
    }
  }

  const handleSignup = async () => {
    return await axios.post('http://localhost:3000/auth/signup', formData)
  }

  const handleSubmit = (from) => {
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

    if(formData.email.length == 0 || formData.password.length == 0 || formData.userName.length == 0){
      toast({
        title: "Enter a vaild email Or password",
        status : 'error',
        duration : 5000,
        isClosable : true
      })
    }

    handleSignup()
    .then((res) => {
      localStorage.setItem("we-connect-user-data", JSON.stringify(res.data))
      toast({
        status: 'success',
        title: 'Hurray! Signup successfull',
        description : 'Keep chatting!',
        duration : 5000,
        isClosable : true
      })
      onClose()
    })
    .catch((e) => {
      console.error(e)
      toast({
        status : 'error', 
        title : "Something went wrong, please try again later",
        duration : 4000,
        isClosable : true
      })
    })
  }

  return (
    <VStack
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      spacing={3}
    >
      <Box as={Flex} cursor='pointer'  onClick={() => document.querySelector('#inputfile').click()}>
        <Avatar src={avatar} size='2xl' onMouseEnter={() => setVisb(true)} onMouseLeave={() => setVisb(false)} filter={visb ? 'brightness(60%)' : 'none'} />
      </Box>
      {
        loading ? 
        <label style={{ width: '80px' , position: 'absolute' , transform: 'translate(15px, 30px)' }} >
          <Spinner 
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl' />
        </label>
        :
        <label className='custom-file-input' style={{visibility : visb ? "visible" : 'hidden', opacity : '100%' , width: '80px' , position: 'absolute' , transform: 'translate(0px, 40px)' }} onMouseEnter={() => setVisb(true)} onMouseLeave={() => setVisb(false)}>
          <Input zIndex='1' type='file' w='100%' visibility='hidden' id='inputfile' onChange={(e) => handleChangeFile(e.target.files[0])}/>
        </label>
      }
      <Input
        border='none'
        bg={colorMode == 'light' ? 'gray.300' : 'gray.600'} 
        type='text'
        placeholder='Username'
        p={1}
        pl={4}
        fontSize='18px'
        focusBorderColor='transparent'
        onChange={(e) => setFormData({...formData, userName : e.target.value})}
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
        onChange={(e) => setFormData({...formData, email : e.target.value})}
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
        onChange={(e) => setFormData({ ...formData, password : e.target.value})}
      />


      <HStack
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        pt={4}
      >
        <Button variant='solid' colorScheme='green' alignContent='center' gap='10px' onClick={() => handleSubmit()}>
          Create Account
          <Tooltip label="If you don't upload an avatar/profile picture, then a random generated image would be added" aria-label='Info'>
            <InfoIcon />
          </Tooltip>
        </Button>
        <Button variant='outline' colorScheme='purple' onClick={() => handleSubmit("guest")}>Guest Login</Button>
      </HStack>
    </VStack>
  )
}

export default SignUpTab
