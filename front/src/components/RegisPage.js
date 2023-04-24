import {
    FormControl,
    Input,
    FormLabel,
    Button,
    Heading
} from "@chakra-ui/react";
import { useEffect, useState } from "react";


const RegisPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {

    }, [])


    return (
        <div className="regis-con">
            <Heading marginBottom='20px' fontSize={30}>Register your account</Heading>
            <div className="regis-pos">
                <FormControl isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input placeholder='username' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="fullname" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Your Store Name</FormLabel>
                    <Input placeholder='store name' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder="08xx xxxx xxxx" type="number" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button colorScheme="green" variant='solid' >Sign Up</Button>
            </div>
        </div>
    )
}

export default RegisPage;