import React from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Component: React.FC = () => {
    return (
        <>
        
            <Navbar />

            <Outlet />

            <Box bg={"black"}>
                <Footer />
            </Box>
        </>
    );
};

const Layout = React.memo(Component);
export default Layout;
