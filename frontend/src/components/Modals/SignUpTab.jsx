import { InfoIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, HStack, Input, Tooltip, useColorMode, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import Gallery from '../../assets/image.png'

const SignUpTab = ({onClose}) => {

  const {colorMode} = useColorMode()
  const toast = useToast()

  const [avatar , setAvatar] = useState("abc")
  const [visb , setVisb] = useState(false)

  const [formData , setFormData] = useState({
    userName : "",
    email : "",
    password : "",
    avatar : ""
  })

  function handleChangeFile(avatar){
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
      .then((res) => setAvatar(res.data.url))
      
    }

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
        <lable className='custom-file-input' style={{visibility : visb ? "visible" : 'hidden', opacity : '100%' , width: '80px' , position: 'absolute' , transform: 'translate(25px, 50px)' }} onMouseEnter={() => setVisb(true)} onMouseLeave={() => setVisb(false)}>
          <Input type='file' w='100%' visibility='hidden' id='inputfile' onChange={(e) => handleChangeFile(e.target.files[0])}/>
        </lable>
      </Box>
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
            onChange={(e) => handleChangeFile(e.target.files[0])}
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
