import React from 'react'
import { Text } from '@chakra-ui/react'
import { Box, Flex, Center } from '@chakra-ui/layout'
import { BsArrowUpSquare } from 'react-icons/bs'
import { IconButton } from '@chakra-ui/react'
import { animateScroll as scroll } from 'react-scroll'
function footer() {
    return (

        <Flex flexDirection="column" justifyContent="center" marginTop="10em" padding="5" style={{ backgroundColor: 'rgba(52, 52, 52)' }}>
            <Center>
                <IconButton
                    onClick={scroll.scrollToTop}
                    bgColor='rgba(140, 20, 252, 1)'
                    colorScheme="pink"
                    id="upArrow"
                    aria-label="UpArrow"
                    color="white"
                    fontSize="50px"
                    size="lg"
                    height="auto"
                    icon={<BsArrowUpSquare />} />
                <Text>
                    Sam Phung ©2021
                </Text>
            </Center>
        </Flex>

    )
}

export default footer
