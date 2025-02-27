import { Box, Image, Heading, HStack, Button} from "@chakra-ui/react"

const ProductCard = ({product}) => {
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
                <Button>Delete</Button>
            </HStack>
        </Box>
    )
}

export default ProductCard