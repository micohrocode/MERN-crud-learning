import { Container, SimpleGrid, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"
import ProductCard from "../components/ProductCard"

const Homepage = () => {
    const {fetchProducts, products} = useProductStore()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    console.log(products)

    return (
        <Container
            maxW={'container.xl'}
            py={12}
        >
            <VStack spacing={8}>
                <h1>Products</h1>

                <SimpleGrid
                    column={{
                        base: 1,
                        md: 2,
                        lg: 3
                    }}
                    spacing={10}
                    width={"full"}
                >
                    {products.map((product)=>(
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </SimpleGrid>

                {products.length == 0 && (
                    <p>
                        No Products Found...{" "}
                        <Link to={"/create"}>Create a Product</Link>
                    </p>
                )}
                
            </VStack>
        </Container>
  )
}

export default Homepage