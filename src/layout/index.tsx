import React from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../pages/Home/component/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Component: React.FC = () => {
  return (
    <>
      <Navbar />

      <Box px={"6rem"}>
        <Outlet />
      </Box>

      <Box bg={"black"}>
        <Footer />
      </Box>
    </>
  );
};

const Layout = React.memo(Component);
export default Layout;
