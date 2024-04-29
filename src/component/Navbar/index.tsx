import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ambil posisi scroll vertikal
      const offset = window.scrollY;
      // Tentukan kondisi apakah navbar harus fixed atau tidak
      setSticky(offset > 0);
    };

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener pada saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      display={"flex"}
      h={"75px"}
      justifyContent={"center"}
      alignItems={"center"}
      borderBottom={"1px solid"}
      bg={"white"}
      position={isSticky ? "fixed" : "static"}
      w={"100%"}
      zIndex={9999}
      overflow={"hidden"}
    >
      <Box
        w={"90%"}
        display={"flex"}
        justifyContent={"space-between"}
        h={"100%"}
      >
        <Box w={"20%"}>
          <Link to={"/"}>
            <Image
              w={"100%"}
              mt={"-1rem"}
              src="../../../src/assets/image/logo_e.comerce.png"
            />
          </Link>
        </Box>

        <Box
          display={"flex"}
          w={"60%"}
          gap={"25px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Text>Home</Text>
          </Link>
          <Text>Contact</Text>
          <Text>About</Text>
          <InputGroup bg={"white"} w={"50%"}>
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input type="text"></Input>
          </InputGroup>
        </Box>
        <Box
          display={"flex"}
          w={"20%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Link to={"/cart"}>
            <FaShoppingCart size={30} />
          </Link>
          <Link to={"/login"}>
            <Text>Login</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
