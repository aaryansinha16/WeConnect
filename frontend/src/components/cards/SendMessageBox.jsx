import { Flex, Img, Input, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { BsImage } from 'react-icons/bs'
import SendIcon from '../../assets/send.png'
import ImageIcon from '../../assets/image.png'

const SendMessageBox = () => {
    const {colorMode} = useColorMode()
  return (
    <Flex
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        bg={colorMode == 'dark' ? '#16171b' : 'gray.300'}
        borderRadius='12px'
        p={1}
        pl={5}
        pr={5}
    >
        <Input 
            focusBorderColor='transparent'
            outline='none'
            type='text'
            placeholder='Send a message'
            border='none'
            bg='transparent'
            fontSize='18px'
            p={0}
            color={colorMode == "light" ? "black" : "white"}
        />
        <Flex alignItems='center' justifyContent='flex-end' width='fit-content' gap='10px' w='20%'>
            <Img src={ImageIcon} alt='sendIcon' w='28px' cursor='pointer' transition='.1s linear'  _hover={{width:'32px'}} />
            <Img src={SendIcon} alt='sendIcon' w='24px' cursor='pointer' transition='.1s linear'  _hover={{width:'28px'}} />
        </Flex>
    </Flex>
  )
}

export default SendMessageBox
