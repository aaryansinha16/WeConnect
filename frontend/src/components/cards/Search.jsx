import { SearchIcon } from '@chakra-ui/icons'
import { HStack, Input, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
    const {colorMode} = useColorMode()
  return (
    <HStack
        p={1}
        m='auto'
        w='100%'
        justifyContent="center"
        alignItems='center'
        borderRadius='12px'
        pl={8}
        fontFamily="Rubik"
        bg={colorMode == 'light' ? "gray.300" : '#16171b'}
    >
        <SearchIcon />
        <Input 
            // border='1px solid red'
            type='text'
            placeholder='Search'
            border='none'
            bg='transparent'
            fontSize='18px'
            p={0}
            color={colorMode == "light" ? "black" : "white"}
        />
    </HStack>
  )
}

export default Search
