import {
    FormControl,
    Input,
    FormLabel,
    Button
} from "@chakra-ui/react";
import { useState } from "react";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) =>{
        setEmail(e.target.value);
        console.log(email);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    

    return (
        <div className="login-con">
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='email' type="email" onChange={(e) => handleChange(e)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="password" type="password" onChange={(e) => handleChangePassword(e)} />
            </FormControl>
            <Button colorScheme="green" variant='solid' >Login</Button>
            <Button colorScheme="teal" variant='ghost' >Click here if dont have an account</Button>
        </div>
    )
}


export default LoginPage;