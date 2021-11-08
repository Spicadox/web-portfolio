import React from 'react'
import { Box, Center } from '@chakra-ui/layout'
import { Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react"

function skill() {
    return (
        <Box id="Skill" className="container">
            <Center marginTop="10em">
                <Box className="heading_box" borderRadius="2xl" padding="10" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)', borderRadius: "2xl" }}>
                    <Heading fontSize="6xl" padding="2">
                        Skills
                    </Heading>
                    <Box className="list_box" flexDirection="row">
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
