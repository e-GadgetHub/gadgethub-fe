import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import data from "../../mock/databestselling.json";
import { InputQuantity } from "./Component/InputQuantity";
import { useNavigate } from "react-router-dom";
const Component: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box w={"100%"} display={"grid"} justifyItems={"center"} gap={"10px"}>
      <Box
        display={"flex"}
        color={"#C1C0C1"}
        fontSize={"15px"}
        gap={"20px"}
        w={"80%"}
        my={"30px"}
      >
        <Text>Home</Text>
        <Text> / </Text>
        <Text color={"black"}> Cart</Text>
      </Box>

      <TableContainer w={"80%"}>
        <Table>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <InputQuantity key={index} item={item} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"80%"}
        my={"30px"}
      >
        <Button
          color={"white"}
          bg={"#DB4444"}
          border={"1px"}
          _hover={{ bg: "black", color: "white" }}
        >
          Return to Shop
        </Button>
        <Button
          color={"white"}
          bg={"#DB4444"}
          border={"1px"}
          _hover={{ bg: "black", color: "white" }}
        >
          Update Cart
        </Button>
      </Box>

      <Box
        w={"80%"}
        display={"flex"}
        justifyContent={"space-between"}
        mt={"30px"}
        mb={"70px"}
      >
        <Flex gap={"10px"}>
          <Input placeholder="Enter your coupon code" border={'1px'}/>
          <Button
            color={"white"}
            bg={"#DB4444"}
            border={"1px"}
            _hover={{ bg: "black", color: "white" }}
          >
            Apply
          </Button>
        </Flex>
        <Box
          w={"35%"}
          display={"grid"}
          gap={"20px"}
          border={"1px"}
          rounded={"md"}
          p={"15px"}
        >
          <Text>Total</Text>
          <Flex justifyContent={"space-between"} borderBottom={"1px"}>
            <Text>SubTotal: </Text>
            <Text>Rp.1000.000</Text>
          </Flex>
          <Flex justifyContent={"space-between"} borderBottom={"1px"}>
            <Text>Shipping: </Text>
            <Text>Free</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text>Total: </Text>
            <Text>Rp. 10.000.000</Text>
          </Flex>

          <Button
            color={"white"}
            bg={"#DB4444"}
            border={"1px"}
            _hover={{ bg: "black", color: "white" }}
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Cart = React.memo(Component);
export default Cart;
