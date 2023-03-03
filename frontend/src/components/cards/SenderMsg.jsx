import React from 'react'
import {Box, Flex, Text, useColorMode} from '@chakra-ui/react'

const SenderMsg = ({message}) => {
  const {colorMode} = useColorMode()
  return (
    <Flex
        w='100%'
        justifyContent='flex-start'
        alignItems='center'
    >
        <Box
            w='fit-content'
            maxW='60%'
            bg={colorMode == 'dark' ? 'coral' : 'gold'}
            p={2}
            borderRadius='12px 12px 12px 0px'
            color='white'
        >
            <Text fontSize='md' textAlign='left'>{message}</Text>
        </Box>
    </Flex>
  )
}

export default SenderMsg
