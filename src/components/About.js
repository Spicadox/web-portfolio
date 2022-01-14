import { Box, Center, HStack } from '@chakra-ui/layout'
import { Text, Heading, Button, IconButton } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoOpenOutline } from "react-icons/io5"
import React from 'react'
import Resume from '../assets/Resume.pdf'

function about() {
    return (
        <Center>
            <Box id="About" maxWidth="1200" bg="gray" padding="10" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)' }}>
                <Heading fontSize="6xl" padding="2">
                    About Me
                </Heading>
                <Text color="white">
                    My name is Sam and I am currently studying Computer Science at The University of North Carolina at Charlotte.
                    I was born in Vietnam and raised in the United States and as such I have a very interesting and diverse background!
                    Perhaps due to that I enjoy foreign cultures and media. I especially like Japanese culture and their Anime and V-Tuber
                    culture. In part of being a data hoarder and archivist I have worked on many fun projects involving the archiving of V-Tubers.
                    I always enjoy learning new skills and ideas to aid me in this hobby and I can't wait to learn more while having fun!
                </Text>
                <Center>
                    <HStack p="1em" spacing="2em">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Spicadox"><IconButton
                            aria-label="Github Icon"
                            fontSize="45px"
                            size="lg"
                            icon={<FaGithub />} />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sam-phung7/"><IconButton
                            aria-label="Linkedin Icon"
                            fontSize="45px"
                            size="lg"
                            icon={<FaLinkedin />} />
                        </a>

                        <a target="_blank" rel="noreferrer" href={Resume}><Button size="lg" leftIcon={<IoOpenOutline />}>
                            Resume
                        </Button></a>
                    </HStack>
                </Center>
            </Box>
        </Center >
    )
}

export default about
