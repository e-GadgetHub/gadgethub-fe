import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box w={"100%"} display={"grid"} justifyItems={"center"} gap={"10px"}>
      <Box display={"flex"} color={"#C1C0C1"} fontSize={"15px"} gap={"5px"} w={"80%"} my={"30px"}>
        <Link to={"/"}>
          <Text>Home</Text>
        </Link>
        <Text> / </Text>
        <Text color={"black"}> Not Found</Text>
      </Box>

      <Flex direction={"column"} alignItems={"center"} my={"7rem"}>
        <Text fontSize={"7xl"} fontWeight={"400"}>
          404 Not Found
        </Text>
        <Text mb={"5rem"}>What Are You Looking For???</Text>
        <Button as={Link} to={"/"} bg={"#db4444"} p={"25px"} color={"white"} _hover={{ bg: "black" }}>
          Back to Homepage
        </Button>
      </Flex>
    </Box>
  );
};

export default NotFound;
