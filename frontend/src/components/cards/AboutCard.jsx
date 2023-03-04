import { Avatar, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { allContext } from '../../contexts/AllContext'
import GroupAvatar from '../../assets/groupAvatar.png'

const AboutCard = () => {
    const {colorMode} = useColorMode()

    const {selectChat} = useContext(allContext)
  return (
    <VStack
        w='100%'
        borderRadius='40px'
        bg='#3E8DE3'
        alignItems='center'
        justifyContent='center'
        spacing='10px'
        p={4}
        pt={{base: 2, md: 6, lg: 8}}
        pb={{base: 2, md: 6, lg: 8}}
        color='white'
        boxShadow= 'rgba(50, 50, 93, 1) 0px 50px 100px -20px, rgba(255, 255, 255, 0.4) 0px 30px 60px -30px, rgba(0, 0, 0, .8) 0px -2px 16px 0px inset'
        _hover={{
            boxShadow:'rgba(0, 0, 0, 0.55) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
        }}
        // style={{boxShadow: '10px 10px -14px 14px #FFF'}}
    >
        {
            Object.keys(selectChat).length == 0 ? 
            <>
                <Avatar size='2xl' name='Vincent Churchel' src='https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Felix'/>
                <VStack spacing={-1} alignItems='center' justifyContent='center'>
                    <Text fontSize='2xl' color={colorMode == 'dark' ? 'white' : 'white'}>Vincent Churchel</Text>
                    <Text fontSize='sm' color='gray.300'>vincent@gmail.com</Text>
                </VStack>
                <Text pt='16px'>Meet Aaryan, He is the owner of the app and the one who worked for everything</Text>
            </>
            :
            <>
                <Avatar size='2xl' name='Vincent Churchel' src={selectChat.groupChatType ? GroupAvatar : selectChat.users[0].avatar}/>
                <VStack spacing={-1} alignItems='center' justifyContent='center'>
                    <Text fontSize='2xl' color={colorMode == 'dark' ? 'white' : 'black'}>{selectChat.groupChatType ? selectChat.name : selectChat.users[0].userName}</Text>
                    <Text fontSize='sm' color='gray.300'>{selectChat.groupChatType ? `${selectChat.users.length} Members` : selectChat.users[0].email}</Text>
                </VStack>
                <Text pt='16px'>Meet {selectChat.users[0].userName}, He is the owner of the app and the one who worked for everything</Text>
            </>
        }
    </VStack>
  )
}

export default AboutCard
