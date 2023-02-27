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


const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode()

    const mobileNav = useDisclosure();

    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    const bg = useColorModeValue("white", "#20232b");
    const ref = React.useRef(null);
    const [y, setY] = React.useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;



    const MobileNavContent = (
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          aria-label="Close menu"
          justifySelf="self-start"
          onClick={mobileNav.onClose}
        />
        <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
          Dashboard
        </Button>
        <Button
          w="full"
          variant="solid"
          colorScheme="brand"
          leftIcon={<AiOutlineInbox />}
        >
          Inbox
        </Button>
        <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
          Videos
        </Button>
      </VStack>
    );

  return (
    <Box pos="relative"
      borderBottom={colorMode == "dark" ? '3.5px solid black' : "3.5px solid rgb(240, 240, 240)"}
    >
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderRadius='50px 50px 0px 0px'
        // borderTop="6px solid"
        // borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="100px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <HStack>
                {/* <Logo /> */}
                <Text fontSize='32px' fontFamily='mono' fontWeight='bold'>WeConnect</Text>
              </HStack>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
              gap='20px'
            >
              <HStack
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                  <SunIcon color='orange' fontSize='20px'/>
                    <Switch 
                        size='lg'
                        aria-label={`Switch to ${text} mode`}
                        onChange={toggleColorMode}
                        defaultChecked
                    />
                  <MoonIcon color={colorMode == 'light' ? 'darkBlue' : 'gray.400'} fontSize='20px'/>
              </HStack>
              <BellIcon fontSize='22px' ml='20px' cursor='pointer'/>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
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
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <NavProfileCard />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  )
}

export default Navbar
