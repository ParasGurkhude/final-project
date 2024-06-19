import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const links = [
    { 
        to: "/",
        label: "HOME",
    },
    {
        to: "/about",
        label: "ABOUT",
    },
    {
        to: "/contact",
        label: "CONTACT",
    },
    {
      to: "/tickets",
      label: "TICKETS",
    },
    {
        to: "/login",
        label: "LOGIN",
    }
]


function Navbar()  {
  const { logout } = useContext(AuthContext);

  return (
    <Flex
      align="center"
      justify="space-around"
      background="gray.200"
      padding={4}
    >
      {links?.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
      ))}
      <Button variant="outline" colorScheme="red" onClick={logout}>
        LOGOUT
      </Button>
    </Flex>
  );
}

export default Navbar
