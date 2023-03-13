import { Avatar, Text, useColorMode, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { allContext } from '../../contexts/AllContext'
import GroupAvatar from '../../assets/groupAvatar.png'
import Atropos from 'atropos/react'

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
        data-atropos-offset="-4" 
        // boxShadow= 'rgba(50, 50, 93, 1) 0px 50px 100px -20px, rgba(255, 255, 255, 0.4) 0px 30px 60px -30px, rgba(0, 0, 0, .8) 0px -2px 16px 0px inset'
        // _hover={{
        //     boxShadow:'rgba(0, 0, 0, 0.55) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
        // }}
        // style={{boxShadow: '10px 10px -14px 14px #000'}}
    >
        {
            Object.keys(selectChat).length == 0 ? 
            <>
                <Atropos
                    activeOffset={40}
                    shadow={false}
                    shadowScale={-10}
                    shadowOffset={-10}
                    highlight={false}

                >
                    <Avatar data-atropos-offset="10" size='2xl' name='Vincent Churchel' src='https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Felix'/>
                </Atropos>
                <VStack spacing={-1} alignItems='center' justifyContent='center'>
                    <Text fontSize='2xl' color={colorMode == 'dark' ? 'white' : 'white'}>Vincent Churchel</Text>
                    <Text fontSize='sm' color='gray.300'>vincent@gmail.com</Text>
                </VStack>
                <Text pt='16px'>Meet Aaryan, He is the one you are chatting</Text>
            </>
            :
            <>
                <Atropos
                    activeOffset={40}
                    shadow={false}
                    shadowScale={-10}
                    shadowOffset={-10}
                    highlight={false}

                >
                    <Avatar data-atropos-offset="10" size='2xl' name='Vincent Churchel' src={selectChat.groupChatType ? GroupAvatar : selectChat.users[0].avatar}/>
                </Atropos>
                <VStack spacing={-1} alignItems='center' justifyContent='center'>
                    <Text fontSize='2xl' color={colorMode == 'dark' ? 'white' : 'white'}>{selectChat.groupChatType ? selectChat.name : selectChat.users[0].userName}</Text>
                    <Text fontSize='sm' color='gray.300'>{selectChat.groupChatType ? `${selectChat.users.length} Members` : selectChat.users[0].email}</Text>
                </VStack>
                <Text pt='16px'>Meet {selectChat.users[0].userName}, He is the owner of the app and the one who worked for everything</Text>
            </>
        }
    </VStack>
  )
}

export default AboutCard
