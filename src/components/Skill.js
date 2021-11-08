import React from 'react'
import { Container, Box, Center, HStack, VStack, StackDivider, Flex } from '@chakra-ui/layout'
import { Text, Heading, Button, IconButton, UnorderedList, ListItem } from "@chakra-ui/react"

function skill() {
    // return (
    //     <div>
    //         <Center marginTop="10em">
    //             <Flex maxWidth="1000" bg="gray" padding="4" flexDirection="column" style={{ backgroundColor: 'rgba(52, 52, 52, 0.5)' }}>
    //                 <Heading fontSize="6xl" padding="2">
    //                     Skills
    //                 </Heading>
    //                 <Flex spacing="5em" >
    //                     <VStack className="language_column">
    //                         <Heading>Languages</Heading>
    //                         <UnorderedList className="skill_list" listStyleType="none" spacing="2" >
    //                             <ListItem marginTop="1em">HTML</ListItem>
    //                             <ListItem>CSS</ListItem>
    //                             <ListItem>Python</ListItem>
    //                             <ListItem>JavaScript</ListItem>
    //                             <ListItem>Java</ListItem>
    //                         </UnorderedList>
    //                     </VStack>
    //                     <div className="midDiv">a</div>
    //                     <VStack className="framework_column">
    //                         <Heading>Frameworks/Libraries</Heading>
    //                         <UnorderedList className="skill_list" listStyleType="none" spacing="2" >
    //                             <ListItem marginTop="1em">Nodejs</ListItem>
    //                             <ListItem>ExpressJs</ListItem>
    //                             <ListItem>Flask</ListItem>
    //                             <ListItem>React</ListItem>
    //                             <ListItem>JQuery</ListItem>
    //                         </UnorderedList>
    //                     </VStack>
    //                 </Flex>
    //                 <Text color="white">
    //                 </Text>
    //             </Flex>
    //         </Center >
    //     </div>
    // )
    return (
        <Box id="Skill" className="container">
            <Center marginTop="10em">
                <Box className="flex1" borderRadius="2xl" padding="10" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)', borderRadius: "2xl" }}>
                    <Heading fontSize="6xl" padding="2">
                        Skills
                    </Heading>
                    <Box className="flex2" flexDirection="row">
                        <Box className="language_column">
                            <Heading>Languages</Heading>
                            <UnorderedList className="skill_list" listStyleType="none" spacing="2" >
                                <ListItem marginTop="1em">HTML</ListItem>
                                <ListItem>CSS</ListItem>
                                <ListItem>Python</ListItem>
                                <ListItem>JavaScript</ListItem>
                                <ListItem>Java</ListItem>
                            </UnorderedList>
                        </Box>

                        {/* <div className="midDiv" flex="1">a</div> */}
                        <Box className="framework_column">
                            <Heading>Frameworks/Libraries</Heading>
                            <UnorderedList className="skill_list" listStyleType="none" spacing="2" >
                                <ListItem marginTop="1em">Nodejs</ListItem>
                                <ListItem>ExpressJs</ListItem>
                                <ListItem>Flask</ListItem>
                                <ListItem>React</ListItem>
                                <ListItem>JQuery</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Text color="white">
                    </Text>
                </Box>
            </Center >
        </Box>
    )
}

export default skill
