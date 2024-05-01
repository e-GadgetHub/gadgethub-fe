import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NewAririval = () => {
  return (
    <>
      <Box w={"100%"} mt={"10px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          New Arrival
        </Text>
      </Box>
      <Box display={"flex"} minH={"600px"} gap={"20px"} mb={"10px"} mx={"10px"}>
        <Box
          boxShadow={"2xl"}
          bgImage={"url('../../../../src/assets/image/leptopApple.jpeg')"}
          backgroundSize={"cover"}
          w={"45%"}
          h={"100%"}
          display={"flex"}
          rounded="md"
        >
          <Box w={"60%"} display={"flex"} flexDirection={"column"} justifyContent={"end"} m={"15px"} p={"5px"}>
            <Text fontWeight={"bold"} fontSize={"2xl"} mb={"5px"}>
              MacBook Air M3 MOCKUP
            </Text>
            <Text textAlign={"justify"} fontSize={"14px"}>
              Unveiling Our Newest Marvel! Elevate Your Experience with the MacBook M3. Unmatched Performance and Sleek
              Design Await. Don't Miss Out on the Next Level of Innovation!
            </Text>

            <Link to={"/produk/1"}>
              <Text my={"10px"} textDecoration={"underline"} color={"red"}>
                Shop Now
              </Text>
            </Link>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} w={"55%"} gap={"20px"}>
          <Box
            display={"flex"}
            h={"50%"}
            boxShadow={"2xl"}
            bgImage={"../../../../src/assets/image/mcm3.jpeg"}
            backgroundSize={"cover"}
            bgPosition={"center"}
            rounded={"md"}
          >
            <Box w={"40%"} display={"flex"} flexDirection={"column"} justifyContent={"end"} m={"15px"} p={"5px"}>
              <Text fontWeight={"bold"} fontSize={"2xl"} mb={"5px"}>
                MackBook Air M2 Pro
              </Text>
              <Box w={"80%"}>
                <Text fontSize={"14px"}>Featuring Superior Performance and Elegant Design.</Text>
              </Box>

              <Link to={"/produk/1"}>
                <Text my={"10px"} textDecoration={"underline"} color={"red"}>
                  Shop Now
                </Text>
              </Link>
            </Box>
          </Box>
          <Box
            display={"flex"}
            h={"50%"}
            boxShadow={"2xl"}
            bgImage={"../../../../src/assets/image/Asuszenbok_14.jpeg"}
            backgroundSize={"cover"}
            bgPosition={"center"}
            rounded={"md"}
          >
            <Box w={"40%"} display={"flex"} flexDirection={"column"} justifyContent={"end"} m={"15px"} p={"5px"}>
              <Text fontWeight={"bold"} fontSize={"2xl"} mb={"5px"}>
                Asus ZenBook 14
              </Text>
              <Box w={"80%"}>
                <Text fontSize={"14px"}>
                  Experience boundless creativity and unmatched productivity with the ASUS ZenBook 14!{" "}
                </Text>
              </Box>

              <Link to={"/produk/1"}>
                <Text my={"10px"} textDecoration={"underline"} color={"red"}>
                  Shop Now
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
