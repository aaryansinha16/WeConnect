import { Box, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import DropCard from './DropCard'

const SearchDropdown = ({searchList, handleAddChat}) => {
  const {colorMode} = useColorMode()
  return (
    <Box zIndex='10' w='inherit' position='absolute' mt='52px' pl={6} pr={6}>
      <VStack 
        spacing={1} 
        justifyContent='flex-start' 
        alignItems='flex-start' 
        w='100%' 
        borderRadius='xl'
        bgColor={colorMode == 'dark' ? 'rgba(0, 0, 0, .55)' : 'rgba(255, 255, 255, .55)' }
        style={{backdropFilter: 'blur(5px)'}}
        >
        {
          searchList?.map((el) => (
            <DropCard key={el._id} {...el} handleAddChat={handleAddChat}/>
          ))
        }
      </VStack>
    </Box>
  )
}

export default SearchDropdown
