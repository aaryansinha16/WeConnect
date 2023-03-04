import {
  Text,
  Input,
  Flex,
  Button,
  useToast,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalOverlay,
  keyframes,
  usePrefersReducedMotion,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel
} from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";
import LoginTab from "./LoginTab";
import SignUpTab from "./SignUpTab";
import Atropos from 'atropos/react'

const changeCol = keyframes`
  from { backdrop-filter:blur(1px) hue-rotate(0deg);  }
  to { backdrop-filter:blur(4px) hue-rotate(10deg);}
`;

export default function AuthModal({ isOpen, onClose }) {
  const [tabChange, setTabChange] = useState(0)
  const [state, setState] = useState(true);
  const firstRef = useRef(null);
  const toast = useToast();
  const preferReducedMotion = usePrefersReducedMotion();
  const animation = preferReducedMotion
    ? undefined
    : `${changeCol} 1 5s linear`;

  const handleChange = (e) => {};

  const handleSubmit = () => {};

  const OverlayOne = () => (
    <ModalOverlay
      bg="transparent"
      backdropFilter="blur(4px)"
      transition="2s linear"
      animation={animation}
    />
  );

  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}
        <ModalContent
          transition="1s linear"
          boxShadow="2xl"
          borderRadius="20px"
          px={3}
          bg="gray.700"
          color="white"
          py={2}
        >
          <Atropos
            activeOffset={30}
            shadow={false}
          >
          <ModalBody>

            <Tabs isLazy isFitted variant='soft-rounded' onChange={(ind) => setTabChange(ind)}>
              <TabList mb='1em' gap='10px'>
                <Tab color='gray.300' _hover={{backgroundColor: tabChange != 0 && 'gray.800'}}>Login</Tab>
                <Tab color='gray.300' _hover={{backgroundColor: tabChange != 1 && 'gray.800'}}>SignUp</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <LoginTab onClose={onClose}/>
                </TabPanel>
                <TabPanel>
                  <SignUpTab onClose={onClose} />
                </TabPanel>
              </TabPanels>
            </Tabs>

          </ModalBody>

        </Atropos>
        </ModalContent>
      </Modal>
    </>
  );
}
