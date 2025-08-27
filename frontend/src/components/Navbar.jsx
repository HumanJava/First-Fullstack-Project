import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { FaPlusMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";







const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={{
          base: "column",
          sm: "row"
        }}>

        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems="center">
          <Button as={Link} to="/create" leftIcon={<FaPlusMinus fontSize={20} />}>
            New
          </Button>
          <Button onClick={toggleColorMode}>
                      
                {colorMode === "light" ?  <FaRegLightbulb />  : <FaLightbulb /> }

          </Button>
        </HStack>
      </Flex>
    </Container >

  )
}

export default Navbar