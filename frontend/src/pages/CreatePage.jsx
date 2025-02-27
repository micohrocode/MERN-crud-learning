import { Container, VStack, Heading, Box, Input, Button } from "@chakra-ui/react"
import { useState } from "react"

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        image: "",
    })

    const handleAddProduct = () => {
        console.log(newProduct)
    }

    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
            >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>

                <Box
                    width={"full"}
                    p={6}
                    rounded={"lg"}
                    shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input 
                        placeholder="Product Name" 
                        name="name" 
                        value={newProduct.name}
                        onChange={(e)=>setNewProduct({...newProduct, name:e.target.value})}
                        />

                        <Input 
                        placeholder="Price" 
                        name="price" 
                        value={newProduct.price}
                        onChange={(e)=>setNewProduct({...newProduct, price:e.target.value})}
                        />

                        <Input 
                        placeholder="Image URL" 
                        name="image" 
                        value={newProduct.image}
                        onChange={(e)=>setNewProduct({...newProduct, image:e.target.value})}
                        />

                        <Button colorScheme={'blue'} onClick={handleAddProduct} w='full'>
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage