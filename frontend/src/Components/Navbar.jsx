import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Flex } from '@chakra-ui/react'

const links = [
    { 
        to: "/",
        label: "HOME",
    },
    {
        to: "/login",
        label: "LOGIN",
    },
    {
        to: "/about",
        label: "ABOUT",
    },
    {
        to: "/contact",
        label: "CONTACT",
    }
]


function Navbar()  {
  return (
    <Flex align="center" justify="space-around" p={3} bg="gray.200" >
      {
        links?.map((link)=>(
            <ChakraLink   as={ReactRouterLink}
            key={link.to} color="gray.900"
            to={link.to} >
                        {link.label}
            </ChakraLink>  
        ))
      }
    </Flex>
  )
}

export default Navbar
