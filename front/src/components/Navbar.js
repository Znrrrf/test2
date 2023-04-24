import {
    Button, Input, Stack, useDisclosure, ModalOverlay, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, FormControl,
    FormLabel
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [errLogin, setErrLogin] = useState(null)
    const navigate = useNavigate();

    
    function isEmail(login) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);
    }
    
    const isNumber = (login) => {
        return !isNaN(login);
    }

    const valueOnChange = () => {
        
    } 

    const handleLogin = async () => {
        console.log('button pressed');
        if (isEmail(login)) {
            // setValue("email");
            sendToDataBase('email')
        } else if (isNumber(login)) {
            // setValue('number')
            console.log(login);
            sendToDataBase('number')
        } else {
            sendToDataBase("username")
        }
        

    }

    const sendToDataBase = async (value) => {

        await axios.post('http://localhost:3000/auth/login', {
            value,
            login,
            password
        })
            .then((result) => {
                console.log('login successs');
                console.log(result);
            }).catch((err) => {
                console.log(err);
                setErrLogin(err.response.data.message);
            });

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
                            <div className="login-con">
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder='email' type="email" value={login} onChange={(e) => setLogin(e.target.value)} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                                <Button colorScheme="green" variant='solid' onClick={() => handleLogin()}>Login</Button>
                                <Button colorScheme="teal" variant='ghost' onClick={() => {
                                    onClose()
                                    navigate('/register')
                                }}>Click here if dont have an account</Button>
                                <Text>{errLogin}</Text>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Stack>
        </div>
    )
}

export default NavBar;