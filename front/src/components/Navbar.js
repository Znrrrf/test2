import {
    Button, Input, Stack, useDisclosure, ModalOverlay, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, FormControl,
    FormLabel,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { isLogin, isLogout, isSafe } from '../features/userStore/userDataLogin'




const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const [errLogin, setErrLogin] = useState(null)
    const [profileIsLogin, setProfileIsLogin] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userIsLogin = useSelector((state) => state.userStore.value);
    const dataUser = useSelector((state) => state.userStore.dataUser);

    useEffect(() => {
        if (!dataUser) {
            if (localStorage.getItem("users")) {
                dispatch(isLogin(JSON.parse(localStorage.getItem("users"))));
                setProfileIsLogin(true)
            }
        } else {
            setProfileIsLogin(true)
        }

    })


    function isEmail(login) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);
    }

    const isNumber = (login) => {
        return !isNaN(login);
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

    const handleLogOut = () => {
        // dispatch(isLogout());
        navigate("/");
        localStorage.removeItem("users");
        window.location.reload();
    }


    const sendToDataBase = async (value) => {

        await axios.post('http://localhost:3000/auth/login', {
            value,
            login,
            password
        })
            .then((result) => {
                console.log('login successs');
                // console.log(result.data.data); // data semua di database user yang login (jangan sampai dilihat orang selain user yang login)
                console.log(result.data.safe); // data aman jika dilihat orang lain selain user
                dispatch(isLogin(result.data.data))
                dispatch(isSafe(result.data.safe))
                localStorage.setItem("users", JSON.stringify(result.data.safe))
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
                {profileIsLogin ? (
                    null
                ) : (
                    <Button colorScheme="gray" variant='ghost' onClick={onOpen}>{userIsLogin}</Button>
                )}
                {profileIsLogin ? (
                    <Popover>
                        <PopoverTrigger>
                            <Button>{userIsLogin}</Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent width={200}>
                                <PopoverArrow />
                                <PopoverHeader>Header</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody className="popover-profile">
                                    <Button isLoading loadingText="Hystori" colorScheme="gray" variant='ghost'>Hystori</Button>
                                    <Button colorScheme="gray" variant='ghost' paddingLeft={7} paddingRight={7} onClick={() => navigate('/manage')}>Manage My Store</Button>
                                    <Button colorScheme='blue' onClick={() => handleLogOut()}>Log out</Button>
                                </PopoverBody>
                                <PopoverFooter>This is the footer</PopoverFooter>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                ) : (
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
                )}

            </Stack>
        </div>
    )
}

export default NavBar;