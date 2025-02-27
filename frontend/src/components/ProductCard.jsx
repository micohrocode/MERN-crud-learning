import { Box, Image, Heading, HStack, Button} from "@chakra-ui/react"
import { useProductStore } from "../store/product"

const ProductCard = ({product}) => {
    const {deleteProduct} = useProductStore()

    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid)
        console.log(success)
        console.log(message)
    }

    return (
        <Box>
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>

            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <p>{product.price}</p>
            </Box>

            <HStack spacing={2}>
                <Button>Edit</Button>
                <Button onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
            </HStack>
        </Box>
    )
}

export default ProductCard