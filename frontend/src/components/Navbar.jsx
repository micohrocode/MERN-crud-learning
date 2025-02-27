import { Button, Container, Flex, HStack, Text  } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <Container maxW="1140px" px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >

            
            <Link to={"/"}>Product Store</Link>

            <HStack spacing={2} alignItems={"center"}>
                <Link to="/create">
                    <Button>
                        +
                    </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar