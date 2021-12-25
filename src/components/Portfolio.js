import React from 'react'
import { Box, Center, Flex } from '@chakra-ui/layout'
import { Text, Heading, Button, IconButton } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"


function portfolio() {
    return (
        <Center marginTop="10em">
            <Box id="Portfolio" maxWidth="1200" bg="gray" padding="10" borderRadius="2xl" style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)' }}>
                <Heading fontSize="6xl" padding="2">
                    Portfolio
                </Heading>
                <Flex flexDirection="row" flexWrap="wrap" className="projects">
                    <Flex flexDirection="column" className="project" borderWidth="1px" borderRadius="lg" overflow="auto">
                        <Heading className="project_name">Twitcasting Downloader</Heading>
                        <Text className="project_description">A CLI program that can grab all video links and its respective m3u8 file from a TwitCasting channel.
                            It is essentially a downloading/archiving tool for the Japanese website Twitcasting.
                            Developed using Python and using FFMPEG and libaries like BeautifulSoup and Selenium.
                        </Text>
                        <a className="github_button" target="_blank" rel="noopener" href="https://github.com/Spicadox/TwitCastingDownloader">
                            <IconButton
                                aria-label="Github Icon"
                                borderTopRadius="none"
                                colorScheme="blue"
                                fontSize="45px"
                                size="lg"
                                w="100%"
                                icon={<FaGithub />} /></a>

                    </Flex>

                    <Flex flexDirection="column" className="project" borderWidth="1px" borderRadius="lg" overflow="auto">
                        <Heading className="project_name">Otaku MeetUp</Heading>
                        <Text className="project_description">A mock website similar to Meetup but with a focus on the Otaku culture, so people
                            can come together with others to create virtual groups.
                            Developed using Nodejs and ExpressJS on the backend, Mongodb for the database.
                        </Text>
                        <Flex>
                            <Box w="100%">
                                <a className="github_button" target="_blank" rel="noopener" href="https://github.com/Spicadox/OtakuMeetUp">
                                    <IconButton
                                        borderRadius="none"
                                        aria-label="Github Icon"
                                        colorScheme="blue"
                                        fontSize="45px"
                                        size="lg"
                                        w="100%"
                                        icon={<FaGithub />}></IconButton></a>
                            </Box>
                            <Box w="100%">
                                <a className="website_button" target="_blank" rel="noopener" href="https://otaku-meetup.herokuapp.com/">
                                    <IconButton
                                        borderRadius="none"
                                        aria-label="CgWebsite Icon"
                                        colorScheme="purple"
                                        fontSize="45px"
                                        size="lg"
                                        w="100%"
                                        icon={<CgWebsite />}></IconButton></a>
                            </Box>
                        </Flex>
                    </Flex>

                    <Flex flexDirection="column" className="project" borderWidth="1px" borderRadius="lg" overflow="auto">
                        <Heading className="project_name">Covid19 Dashboard</Heading>
                        <Text className="project_description">An interactive dashboard used to display Covid19 cases throughout the world. This application was developed
                            using Python and using dash, pandas, and go. This project was done within a group in my software engineering course where
                            we attempted to practice an agile work environement.
                        </Text>
                        <a className="github_button" target="_blank" rel="noopener" href="https://github.com/Spicadox/ITSC-3155-Group">
                            <IconButton
                                aria-label="Github Icon"
                                borderTopRadius="none"
                                colorScheme="blue"
                                fontSize="45px"
                                size="lg"
                                w="100%"
                                icon={<FaGithub />}></IconButton></a>
                    </Flex>

                    <Flex flexDirection="column" className="project" borderWidth="1px" borderRadius="lg" overflow="auto">
                        <Heading className="project_name">W2X101</Heading>
                        <Text className="project_description">A static site that goes over Super Resolution and explains the various Super Resolution softwares like Waifu2x and its derivates.
                            My first website developed using JQuery.
                        </Text>
                        <Flex>
                            <Box w="100%">
                                <a className="github_button" target="_blank" rel="noopener" href="https://github.com/Spicadox/w2x101">
                                    <IconButton
                                        aria-label="Github Icon"
                                        borderRadius="none"
                                        colorScheme="blue"
                                        fontSize="45px"
                                        size="lg"
                                        w="100%"
                                        icon={<FaGithub />}></IconButton></a>
                            </Box>
                            <Box w="100%">
                                <a className="website_button" target="_blank" rel="noopener" href="https://spicadox.github.io/w2x101/">
                                    <IconButton
                                        aria-label="CgWebsite Icon"
                                        borderRadius="none"
                                        colorScheme="purple"
                                        fontSize="45px"
                                        size="lg"
                                        w="100%"
                                        icon={<CgWebsite />}></IconButton></a>
                            </Box>
                        </Flex>
                    </Flex>

                    <Flex flexDirection="column" className="project" borderWidth="1px" borderRadius="lg" overflow="auto">
                        <Heading className="project_name">BiliBili Link Grabber</Heading>
                        <Text className="project_description">A CLI script that grabs all video URLs on certain BiliBili pages and writes it into a csv file. The csv file can be used by youtube-dl and annie to download all the video links in the csv file.
                            Developed using Python and libraries like BeautifulSoup and Selenium.
                        </Text>
                        <a className="github_button" target="_blank" rel="noopener" href="https://github.com/Spicadox/bilibili-link-grabber">
                            <IconButton
                                aria-label="Github Icon"
                                borderTopRadius="none"
                                colorScheme="blue"
                                fontSize="45px"
                                size="lg"
                                w="100%"
                                icon={<FaGithub />}></IconButton></a>
                    </Flex>

                    <Flex flexDirection="column" className="project" borderWidth="1px" borderRadius="lg" overflow="auto">
                        <Heading className="project_name">WeSource</Heading>
                        <Text className="project_description">A web platform designed to provide users with opportunities to crowdsource and acquire foreign goods.
                            This site is similar to KickStart and GoFundMe, but with more freedom of allowing users to pool in money to crowdsource and/or consolidate foreign goods.
                            Development in progress, but it is being developed using React with MUI, a backend using Python and Flask, and using MongoDB as our database.
                        </Text>
                        <Flex>
                            <Box w="100%">
                                <a className="github_button" target="_blank" rel="noopener" href="https://github.com/marajput123/wesource-backend">
                                    <IconButton
                                        aria-label="Github Icon"
                                        borderTopRadius="none"
                                        colorScheme="blue"
                                        fontSize="45px"
                                        size="lg"
                                        w="100%"
                                        icon={<FaGithub />}></IconButton></a>
                            </Box>
                            <Box w="100%">
                                <a className="website_button" target="_blank" rel="noopener" href="https://spicadox.github.io/wesource-frontend/">
                                    <IconButton
                                        aria-label="CgWebsite Icon"
                                        borderRadius="none"
                                        colorScheme="purple"
                                        fontSize="45px"
                                        size="lg"
                                        w="100%"
                                        icon={<CgWebsite />}></IconButton></a>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Center >
    )
}

export default portfolio
