import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CardBestSelling } from "./CardBestSelling";
import { IBestSell } from "../../../type";
import domy from "../../../mock/databestselling.json";
export const BestSelling = () => {
  const [data, setData] = React.useState<IBestSell[]>([]);

  React.useEffect(() => {
    setData(domy);
  }, []);

  return (
    <Box py={"15px"} my={"20px"}>
      <Flex w={"100%"} mt={"10px"}>
        <Box bg={"#db4444"} w={"18px"} h={"35px"} borderRadius={3} me={3}></Box>
        <Text fontWeight={"bold"} fontSize={"20px"} mt={"3px"}>
          Best Selling
        </Text>
      </Flex>

      <Box display={"flex"}>
        {data.map((item, index) => (
          <CardBestSelling key={index} data={item} />
        ))}
      </Box>
    </Box>
  );
};
