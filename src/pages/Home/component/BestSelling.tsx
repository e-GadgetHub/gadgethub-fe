import { Box, Text } from "@chakra-ui/react";
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
    <Box py={"15px"}>
      <Text fontSize={"20px"} fontWeight={"bold"}>
        Best Sellings
      </Text>

      <Box display={"flex"}>
        {data.map((item, index) => (
          <CardBestSelling key={index} data={item} />
        ))}
      </Box>
    </Box>
  );
};
