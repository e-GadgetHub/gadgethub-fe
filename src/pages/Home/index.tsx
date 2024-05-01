import { Box } from "@chakra-ui/react";
import { BestSelling } from "./component/BestSelling";
import { NewAririval } from "./component/NewAririval";
import { Superiority } from "./component/Superiority";
import { Promo } from "./component/Promo";
import React from "react";

const Component: React.FC = () => {
  return (
    <Box w={"100%"} display={"grid"} justifyItems={"center"} gap={"30px"}>
      <Promo />

      <BestSelling />

      <NewAririval />

      <Superiority />
    </Box>
  );
};

const Home = React.memo(Component);
export default Home;
