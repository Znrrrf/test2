import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    Box,
    Image
} from '@chakra-ui/react'


const ManagePage = () => {


    const productList = [
        {
            id: 1,
            src: "https://s1.bukalapak.com/img/61073577982/s-330-330/data.jpeg.webp",
            productName: "baju",
            category: "top",
            description: "baju enak dan nyaman",
            price: 1000000
        }, {
            id: 2,
            src: "https://s1.bukalapak.com/img/61073577982/s-330-330/data.jpeg.webp",
            productName: "baju",
            category: "top",
            description: "baju enak dan nyaman",
            price: 1000000
        }, {
            id: 3,
            src: "https://s1.bukalapak.com/img/61073577982/s-330-330/data.jpeg.webp",
            productName: "baju",
            category: "top",
            description: "baju enak dan nyaman",
            price: 1000000
        }
    ]

    const productUp = productList.map((el) => {
        return (
            <Tbody>
                <Tr>
                    <Td>{el.id}</Td>
                    <Td>
                        <Box boxSize='100px'>
                            <Image src={el.src} alt='picture is empty' />
                        </Box>
                    </Td>
                    <Td>{el.productName}</Td>
                    <Td>{el.category}</Td>
                    <Td>{el.description}</Td>
                    <Td>{el.price}</Td>
                    <Td>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </Td>

                </Tr>
            </Tbody>
        )
    })

    // localStorage.setItem("productList")

    return (
        <div className="manage-con">
            <div className='my-product-list'>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Image</Th>
                                <Th>Product Name</Th>
                                <Th>Category</Th>
                                <Th>Description</Th>
                                <Th>Price</Th>
                            </Tr>
                        </Thead>
                        {productUp}
                    </Table>
                </TableContainer>
            </div>
            <div className='regis-product'>
                <Button colorScheme='red' variant='solid'>My Report</Button>
                <div className='insert-product'>
                    <Heading>Insert Product Here</Heading>
                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input type='number' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image Source</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Category</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <Button>Add Product</Button>
                </div>
            </div>
        </div>
    )
}

export default ManagePage;