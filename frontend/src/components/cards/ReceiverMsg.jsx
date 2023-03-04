import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'

const ReceiverMsg = ({message}) => {
    const {colorMode} = useColorMode()
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }, [])
  return (
    <Flex
        w='100%'
        justifyContent='flex-end'
        alignItems='center'
        ref={scrollRef}
    >
        <Box
            w='fit-content'
            maxW='60%'
            bg={colorMode == 'dark' ? 'facebook.300' : 'lightskyblue'}
            p={2}
            borderRadius='12px 12px 0px 12px'
            color='white'
        >
            <Text fontSize='md' textAlign='left'>{message}</Text>
        </Box>
    </Flex>
  )
}

export default ReceiverMsg
