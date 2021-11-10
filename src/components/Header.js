import { Box, Center, VStack } from '@chakra-ui/layout'
import { Text, Heading, Flex } from '@chakra-ui/react'
import React from 'react'

import { useState } from 'react';



function Header() {
    const [headerHeight, setHeaderHeight] = useState()
    function getHeaderDimensions() {
        try {
            const hHeight = document.getElementById('Home').offsetHeight;
            const height = window.innerHeight

            if (hHeight > height / 3) {
                console.log(setHeaderHeight)
                setHeaderHeight("1vh")
                return headerHeight;
            }
            console.log(setHeaderHeight)
            setHeaderHeight("25vh");
            return headerHeight;
        }
        catch {
            console.log(setHeaderHeight)
            setHeaderHeight("1vh");
            return headerHeight;
        }

    }


    return (
        <Center id="Home" marginTop={getHeaderDimensions}>
            <Box justifyContent="center" maxW="1000px" bg="gray" padding="10" borderRadius="2xl" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)' }}>

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
