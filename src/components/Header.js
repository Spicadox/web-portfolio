import { Box, Center, VStack } from '@chakra-ui/layout'
import { Text, Heading, Flex } from '@chakra-ui/react'
import React from 'react'

function Header() {
    return (
        <Center>
            <Box id="Home" maxW="1000px" bg="gray" padding="10" marginTop="20em" borderRadius="2xl" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)' }}>

                <VStack className="intro_header">
                    <Flex flexDir="row">
                        <Heading fontSize="6xl" padding="2">Hi, I am <Heading fontSize="6xl" color="blue.300">Sam</Heading></Heading>
                    </Flex>
                    <Text fontSize='2xl'>I like learning new things and challenging myself as a software engineer</Text>
                </VStack>
            </Box>
        </Center>
    )
}

export default Header
