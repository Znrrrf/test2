import {
    FormControl,
    Input,
    FormLabel,
    Button,
    Heading
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";


const RegisPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [store_name, setStoreName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    const regisSended = async () => {
        console.log("button pressed");
        if(password !== confirm) return console.log(`password confirm is different`);
        if(!username || !password || !confirm || !email || !name || !store_name || !phone_number) return console.log(`fill all the form please`);
        // console.log(`regis success`);

        await axios.post("http://localhost:3000/auth/register",{
            email,
            password,
            username,
            name,
            store_name,
            phone_number
        }) .then((result) => {
            console.log("regis success")
            console.log(result)
            
        }).catch((err) => {
            console.error(err)
        });

    }


    // useEffect(() => {
    //     console.log(username)
    // }, [username])


    return (
        <div className="regis-con">
            <Heading marginBottom='20px' fontSize={30}>Register your account</Heading>
            <div className="regis-pos">
                <FormControl isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input placeholder='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="fullname" type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
                    <FormLabel>Password Confirm</FormLabel>
                    <Input placeholder="password confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Your Store Name</FormLabel>
                    <Input placeholder='store name' type="text" value={store_name} onChange={(e) => setStoreName(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder="08xx xxxx xxxx" type="number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                </FormControl>
                <Button colorScheme="green" variant='solid' onClick={() => regisSended()} >Sign Up</Button>
            </div>
        </div>
    )
}

export default RegisPage;