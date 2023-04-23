import {
    Button, Input, Stack, useDisclosure, ModalOverlay, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, FormControl,
    FormLabel
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";




const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    return (
        <div className="nav-con">
            <Stack spacing={5} direction="row">
                <Button colorScheme="gray" variant='ghost' paddingLeft={7} paddingRight={7} onClick={() => navigate('/')}>Tittle Web Home</Button>
                <Input placeholder="search" colorScheme="gray" />
                <Button colorScheme="gray" variant='ghost' >Cart</Button>
                <Button isLoading loadingText="Hystori" colorScheme="gray" variant='ghost' >Hystori</Button>
                <Button colorScheme="gray" variant='ghost' paddingLeft={7} paddingRight={7} onClick={() => navigate('/manage')}>Manage My Store</Button>
                <Button colorScheme="gray" variant='ghost' onClick={onOpen}>Log in</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Login To Web</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* <Text>
                                Magna aute fugiat et mollit.
                            </Text> */}
                            <div className="login-con">
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder='email' type="email" onChange={(e) => handleChange(e)} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder="password" type="password" onChange={(e) => handleChangePassword(e)} />
                                </FormControl>
                                <Button colorScheme="green" variant='solid' >Login</Button>
                                <Button colorScheme="teal" variant='ghost' >Click here if dont have an account</Button>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Add account Click Here
                            </Button>
                            <Button variant='ghost'>Log In</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>

        </div>
    )
}

export default NavBar;