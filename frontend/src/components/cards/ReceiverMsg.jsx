import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ReceiverMsg = ({message}) => {
    const {colorMode} = useColorMode()
  return (
    <Flex
        w='100%'
        justifyContent='flex-end'
        alignItems='center'
    >
        <Box
            w='fit-content'
            maxW='60%'
            bg={colorMode == 'dark' ? 'facebook.300' : 'lightskyblue'}
            p={2}
            borderRadius='12px 12px 0px 12px'
            color='white'
        >
            <Text fontSize='md' textAlign='right'>{message}</Text>
        </Box>
    </Flex>
  )
}

export default ReceiverMsg
