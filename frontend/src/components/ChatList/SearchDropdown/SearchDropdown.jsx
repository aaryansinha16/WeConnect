import { Box, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import DropCard from './DropCard'

const SearchDropdown = ({searchList, handleAddChat, search}) => {
  const {colorMode} = useColorMode()
  return (
    <Box className={colorMode == 'dark' ? 'chatListDark' : 'chatListLight'} zIndex='10' w='110%' maxH='300px' position='absolute' top='110%' pl={6} pr={6} overflowY='scroll'>
      <VStack 
        spacing={1} 
        justifyContent='flex-start' 
        alignItems='flex-start' 
        w='100%' 
        borderRadius='xl'
        bgColor={colorMode == 'dark' ? 'rgba(0, 0, 0, .55)' : 'rgba(230, 230, 230, .55)' }
        style={{backdropFilter: 'blur(5px)'}}
        >
        {
          searchList?.map((el, i) => (
            <DropCard key={i} {...el} handleAddChat={handleAddChat}/>
          ))
        }
        {
          searchList.length == 0 && search.length != 0 && <Text textAlign='center' backdropFilter='blur(3px)' w='100%' fontSize='18px' p={2}>"No Search results"</Text>
        }
      </VStack>
    </Box>
  )
}

export default SearchDropdown
