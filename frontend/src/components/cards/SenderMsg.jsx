import React, { useEffect, useRef } from 'react'
import {Avatar, Box, Flex, Text, Tooltip, useColorMode, VStack} from '@chakra-ui/react'

const SenderMsg = ({
  message,
  sender
}) => {
  const {colorMode} = useColorMode()
  const scrollRef = useRef()

  useEffect(() => {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }, [])
  return (
    <Flex
        w='100%'
        justifyContent='flex-start'
        alignItems='center'
        gap='5px'
        ref={scrollRef}
    >
        <Tooltip label={sender.userName}>
          <Avatar src={sender.avatar} name='test' size='sm' />
        </Tooltip>
        <VStack
            w='fit-content'
            maxW='60%'
            bg={colorMode == 'dark' ? 'coral' : 'gold'}
            p={2}
            borderRadius='12px 12px 12px 0px'
            color='white'
            alignItems='flex-start'
            justifyContent='center'
            spacing={0}
        >
            <Text fontSize='xs' color='white' fontWeight='bold' pb='2px' mt='-4px'>{sender.userName}</Text>
            <Text fontSize='md' textAlign='left'>{message}</Text>
        </VStack>
    </Flex>
  )
}

export default SenderMsg
