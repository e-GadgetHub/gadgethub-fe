import { Box, Text } from "@chakra-ui/react";
import { Category } from "./component/Category";
import { BestSelling } from "./component/BestSelling";
import { NewAririval } from "./component/NewAririval";
import { Superiority } from "./component/Superiority";
import { Promo } from "./component/Promo";
import React from "react";

const Component: React.FC = () => {
    return (
        <Box display={"grid"} justifyItems={"center"} gap={"10px"}>
            <Promo />

            <Box display={"flex"} w={"100%"} justifyContent={"center"} borderY={"1px"}>
                <Category />
            </Box>

            <Box w={"85%"} my={"20px"}>
                <BestSelling />
            </Box>

            <Box w={"85%"} minH={"600px"} my={"10px"}>
                <Text fontWeight={"bold"} fontSize={"20px"}>
                    New Arrival
                </Text>
                <NewAririval />
            </Box>

            <Box w={"85%"} my={"70px"}>
                <Superiority />
            </Box>
        </Box>
    );
};

const Home = React.memo(Component);
export default Home;
