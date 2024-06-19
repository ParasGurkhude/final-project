import { Box, Heading, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

function Home()  {
  const navigate = useNavigate();

  function handleClick() {
    console.log(`kuch aur bhi operations hai`);

    navigate(`/about`);
  }

  function handleClick1() {
    console.log("Going to contact page using 'useNavigate'")
    navigate(`/contact`)
  }


  return (
    <Box>
        <Heading as="h1" size="xl"> Home Page</Heading>
        <Button colorScheme="red" variant="solid" onClick={handleClick}>
          Go to About Page
        </Button>
        <Button colorScheme="red" variant="solid" onClick={handleClick1}>
          Go to Contact Page
        </Button>
    </Box>
  )
}

export default Home
