import React from 'react'
import {
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    VStack,
    chakra,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Switch,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
  } from "@chakra-ui/react";
import { BellIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import NavProfileCard from '../cards/NavProfileCard';
import Atropos from 'atropos/react'


const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const bg = useColorModeValue("white", "#20232b");
    const ref = React.useRef(null);
    const [y, setY] = React.useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;


  return (
    <Box pos="relative"
      borderBottom={colorMode == "dark" ? '3.5px solid black' : "3.5px solid rgb(240, 240, 240)"}
    >
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderRadius={{base: '15px 15px 0px 0px', md : '50px 50px 0px 0px'}}
        // borderTop="6px solid"
        // borderTopColor="brand.400"
        w="full"
        // overflowY="hidden"
      >
        <chakra.div h={{base: "4rem" , sm :'4rem', md: "4.5rem"}} mx={{base: '0px', md: "100px"}}>
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <HStack>
                {/* <Logo /> */}
                <Text fontSize={{base: '24px', md:'32px'}} fontFamily='mono' fontWeight='bold'>WeConnect</Text>
              </HStack>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
              gap='20px'
              display={{base:'none', sm:'flex'}}
            >
              <HStack
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                  <SunIcon color='orange' fontSize='20px'/>
                  <Atropos

                  >
                    <Switch 
                        data-atropos-offset='10'
                        size='lg'
                        aria-label={`Switch to ${text} mode`}
                        onChange={toggleColorMode}
                        defaultChecked
                    />
                  </Atropos>
                  <MoonIcon color={colorMode == 'light' ? 'darkBlue' : 'gray.400'} fontSize='20px'/>
              </HStack>
              <BellIcon fontSize='22px' ml='20px' cursor='pointer'/>
              <HStack spacing="5" 
                display={{ base: "none", md: "flex" }}
              >
                <Link
                  isExternal
                  aria-label="Go to Aaryan's GitHub page"
                  href="https://github.com/aaryansinha16/weconnect"
                >
                  <Icon
                    as={AiFillGithub}
                    display="block"
                    transition="color 0.2s"
                    fontSize='22px'
                    _hover={{ color: "gray.600" }}
                  />
                </Link>
              </HStack>

              <NavProfileCard />
            </Flex>
            <Flex
              alignItems='center'
              gap='20px'
            >
              <BellIcon cursor='pointer' fontSize='22px'/>
              <IconButton
                display={{ base: "flex", sm: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={() => onOpen()}
              />
            </Flex>
            {/* Drawer for mobile navbar */}
              <Drawer 
                onClose={onClose} 
                isOpen={isOpen} 
                size='xl'
                >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader>
                  <NavProfileCard />
                </DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                  <HStack
                      justifyContent='center'
                      alignItems='center'
                      spacing={2}
                    >
                      <SunIcon color='orange' fontSize='20px'/>
                        <Switch 
                            data-atropos-offset='10'
                            size='lg'
                            aria-label={`Switch to ${text} mode`}
                            onChange={toggleColorMode}
                            defaultChecked
                        />
                      <MoonIcon color={colorMode == 'light' ? 'darkBlue' : 'gray.400'} fontSize='20px'/>
                  </HStack>

                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </chakra.div>
      </chakra.header>
    </Box>
  )
}

export default Navbar
