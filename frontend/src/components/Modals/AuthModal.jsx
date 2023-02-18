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

const changeCol = keyframes`
  from { backdrop-filter:blur(1px) hue-rotate(0deg);  }
  to { backdrop-filter:blur(4px) hue-rotate(10deg);}
`;

export default function AuthModal({ isOpen, onClose }) {
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
          <ModalBody>

            <Tabs isLazy isFitted variant='soft-rounded'>
              <TabList mb='1em' gap='10px'>
                <Tab>Login</Tab>
                <Tab>SignUp</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Login</p>
                </TabPanel>
                <TabPanel>
                  <p>SignUp</p>
                </TabPanel>
              </TabPanels>
            </Tabs>

          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
}
