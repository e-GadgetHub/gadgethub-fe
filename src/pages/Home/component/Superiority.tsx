import { Box, Text } from "@chakra-ui/react";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export const Superiority = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"100px"} h={"300px"} my={"70px"}>
      <Box w={"222px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Box bg={"#C1C0C1"} p={"10px"} rounded={"100%"}>
          <Box bg={"black"} rounded={"100%"} p={"10px"}>
            <TbTruckDelivery size={50} color="white" />
          </Box>
        </Box>
        <Box textAlign={"center"} my={"10px"}>
          <Text fontWeight={"bold"}>FREE AND FAST DELIVERY</Text>
          <Text fontSize={"12px"}>Free Delivery for all orders over 3 JT</Text>
        </Box>
      </Box>

      <Box w={"222px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Box bg={"#C1C0C1"} p={"10px"} rounded={"100%"}>
          <Box bg={"black"} rounded={"100%"} p={"10px"}>
            <TfiHeadphoneAlt size={50} color="white" />
          </Box>
        </Box>
        <Box textAlign={"center"} my={"10px"}>
          <Text fontWeight={"bold"}>24/7 CUSTOMER SERVICES</Text>
          <Text fontSize={"12px"}>Friendly 24/7 customer support</Text>
        </Box>
      </Box>

      <Box w={"222px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Box bg={"#C1C0C1"} p={"10px"} rounded={"100%"}>
          <Box bg={"black"} rounded={"100%"} p={"10px"}>
            <IoShieldCheckmark size={50} color="white" />
          </Box>
        </Box>
        <Box textAlign={"center"} my={"10px"}>
          <Text fontWeight={"bold"}>MONEY BACK GUARANTEE</Text>
          <Text fontSize={"12px"}>We return money within 30 days</Text>
        </Box>
      </Box>
    </Box>
  );
};
