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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';




const ManagePage = () => {

    const dataUser = useSelector((state) => state.userStore.dataUser);
    const dataUserSafe = useSelector((state) => state.userStore.dataUserSafe);
    const navigate = useNavigate();

    const [img_src, setImgSrc] = useState('');
    const [product_name, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    // const [user_seller_id, setUserSellerId] = useState(JSON.parse(localStorage.getItem("users")).id);
    const [user_seller_id, setUserSellerId] = useState(JSON.parse(localStorage.getItem("idLogin")));
    const [productSeller, setProductSeller] = useState(JSON.parse(localStorage.getItem("productSeller")));

    // if (!dataUserSafe.id) 

    useEffect(() => {

        // console.log(`id user ${user_seller_id}`)
        getProductSeller()
        if (!JSON.parse(localStorage.getItem("productSeller"))) return navigate('/');
        // console.log(productSeller);
        // runProductSeller()
    }, [])

    const getProductSeller = async () => {

        if (!JSON.parse(localStorage.getItem("idLogin"))) return navigate('/');
        // if (!JSON.parse(localStorage.getItem("productSeller"))) return navigate('/');

        // setUserSellerId(dataUserSafe.id);
        // console.log(dataUser.id);


        await axios.post("http://localhost:3000/product/seller", {
            user_seller_id
        })
            .then((result) => {
                console.log("id sended");
                // console.log(result.data.productById);
                localStorage.setItem("productSeller", JSON.stringify(result.data.productById))
                setProductSeller(result.data.productById)
                // console.log(productSeller);
            }).catch((err) => {
                console.error(err);
            });


    }



    const sendProductData = async () => {
        // console.log(img_src);
        // console.log(product_name);
        // console.log(category);
        // console.log(description);
        // console.log(price);
        // console.log(stock);
        // console.log(user_seller_id);

        console.log("button pressed");
        await axios.post("http://localhost:3000/product/register", {
            img_src,
            product_name,
            category,
            description,
            price,
            stock,
            user_seller_id
        })
            .then((result) => {
                // console.log("success added");
                // console.log(result);
            }).catch((err) => {
                console.error(err);
            });

    }

    let productList = [
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

    // productList = productSeller
    // let productUp = null
    // const runProductSeller = async () => {

    //     productUp = await productList.map((el) => {
    //         return (
    //             <Tbody key={el.id}>
    //                 <Tr>
    //                     <Td>{el.id}</Td>
    //                     <Td>
    //                         <Box boxSize='100px'>
    //                             <Image src={el.src} alt='picture error' />
    //                         </Box>
    //                     </Td>
    //                     <Td>{el.productName}</Td>
    //                     <Td>{el.category}</Td>
    //                     <Td>{el.description}</Td>
    //                     <Td>{el.price}</Td>
    //                     <Td>
    //                         <Button>Edit</Button>
    //                         <Button>Delete</Button>
    //                     </Td>

    //                 </Tr>
    //             </Tbody>
    //         )
    //     })

    // }

    const productUp = productSeller.map((el) => {
        return (
            <Tbody key={el.id}>
                <Tr>
                    <Td>{el.id}</Td>
                    <Td>
                        <Box boxSize='100px'>
                            <Image src={el.img_src} alt='picture error' />
                        </Box>
                    </Td>
                    <Td>{el.product_name}</Td>
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
                        <Input type='text' value={product_name} onChange={(e) => setProductName(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image Source</FormLabel>
                        <Input type='text' value={img_src} onChange={(e) => setImgSrc(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Category</FormLabel>
                        <Input type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Stock</FormLabel>
                        <Input type='text' value={stock} onChange={(e) => setStock(e.target.value)} />
                    </FormControl>
                    <Button onClick={() => {
                        sendProductData()
                        window.location.reload()
                    }}>Add Product</Button>
                </div>
            </div>
        </div>
    )
}

export default ManagePage;