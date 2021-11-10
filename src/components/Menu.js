import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ReactDOMServer from 'react-dom/server';
import { Link as ReactLink } from 'react-scroll'
const Links = ['About', 'Skill', 'Portfolio', 'Contact'];


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    as={ReactLink}
    to={children}
    smooth={true}
    duration={800}
    spy={true}
    exact='true'
    offset={0}
    px={4}
    py={1}
    rounded={'md'}
    fontSize={30}
    fontFamily={'monospace'}
    color={'white'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    onClick={() => {
      const anchor = document.getElementById(ReactDOMServer.renderToString(children))
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }}
    href={`#${children}`}>
    {children}
  </Link>
);

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} borderRadius="2xl" borderTopRadius="none" style={{ backgroundColor: 'rgba(52, 52, 52)' }}>
        <Flex h={36} alignItems={'center'} justifyContent={'center'} flexWrap='wrap'>
          <IconButton
            size={'md'}
            isFullWidth={'true'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              flexWrap='wrap'
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}