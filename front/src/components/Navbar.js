import { Button, Input } from "@chakra-ui/react";





const NavBar = () => {
    return(
        <div className="nav-con">
            <Button colorScheme="teal" variant='ghost' color='white'>Tittle Web Home</Button>
            <Input htmlSize={10} placeholder="search" />
            <Button colorScheme="teal" variant='ghost' color='white'>Cart</Button>
        </div>
    )
}

export default NavBar;