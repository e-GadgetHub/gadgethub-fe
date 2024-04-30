import { Box, Button, Card, Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Component: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box w={"100%"} display={"grid"} justifyItems={"center"} gap={"10px"}>
      <Flex justifyContent={"space-between"} w={"100%"} my={"30px"}>
        <Flex fontSize={20} gap={"5px"} w={"80%"}>
          <Text>Wishlist (4)</Text>
        </Flex>
        <Flex>
          <Button bg={"#db4444"} p={"20px"} color={"white"} _hover={{ bg: "black" }}>
            Move All to Cart
          </Button>
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={10} w={"100%"} pb={"4rem"}>
        <Card>
          <Card
            h={"270px"}
            w={"260px"}
            bgImage={
              "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/24/7297e19b-d8f4-4a80-9455-6c40c2b885b3.png.webp?ect=4g"
            }
            bgSize={"cover"}
            bgPosition={"center"}
            onClick={() => navigate("/detail")}
            _hover={{ cursor: "pointer" }}
          >
            <Flex w={"100%"} justifyContent={"space-between"} p={"10px"}>
              <Flex direction={"row"} justifyContent={"space-between"} w={"100%"}>
                <Box bg={"#db4444"} px={2} py={1} borderRadius={3} color={"white"}>
                  -50%
                </Box>

                <Box _hover={{ cursor: "pointer" }}>
                  <RiDeleteBin6Line size={20} />
                </Box>
              </Flex>
            </Flex>
            <Spacer />
          </Card>
          <Button color={"white"} bg={"#db4444"} gap={2} _hover={{ bg: "black" }}>
            <FaShoppingCart />
            <Text>Add to cart</Text>
          </Button>
        </Card>
      </Grid>

      <Flex justifyContent={"space-between"} w={"100%"} my={"30px"}>
        <Flex fontSize={"15px"} gap={"5px"} w={"80%"}>
          <Box bg={"#db4444"} w={"18px"} h={"35px"} borderRadius={3} me={3}></Box>
          <Text fontSize={20} mt={1}>
            Just For You
          </Text>
        </Flex>
        <Flex>
          <Button bg={"#db4444"} p={"20px"} color={"white"} _hover={{ bg: "black" }}>
            See All
          </Button>
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} w={"100%"} pb={"4rem"}>
        <Card
          h={"270px"}
          w={"260px"}
          bgImage={
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/24/7297e19b-d8f4-4a80-9455-6c40c2b885b3.png.webp?ect=4g"
          }
          bgSize={"cover"}
        >
          <Flex w={"100%"} justifyContent={"space-between"} p={"10px"}>
            <Flex direction={"row"} justifyContent={"space-between"} w={"100%"}>
              <Box bg={"#db4444"} px={2} py={1} color={"white"} borderRadius={3}>
                -50%
              </Box>
            </Flex>
          </Flex>
          <Spacer />
          <Button color={"white"} bg={"#db4444"} gap={2} _hover={{ bg: "black" }}>
            <FaShoppingCart />
            <Text>Add to cart</Text>
          </Button>
        </Card>

        <Card
          h={"270px"}
          w={"260px"}
          bgImage={
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/24/7297e19b-d8f4-4a80-9455-6c40c2b885b3.png.webp?ect=4g"
          }
          bgSize={"cover"}
        >
          <Flex w={"100%"} justifyContent={"space-between"} p={"10px"}>
            <Flex direction={"row"} justifyContent={"space-between"} w={"100%"}>
              <Box bg={"#db4444"} px={2} py={1} color={"white"} borderRadius={3}>
                -50%
              </Box>
            </Flex>
          </Flex>
          <Spacer />
          <Button color={"white"} bg={"#db4444"} gap={2} _hover={{ bg: "black" }}>
            <FaShoppingCart />
            <Text>Add to cart</Text>
          </Button>
        </Card>

        <Card
          h={"270px"}
          w={"260px"}
          bgImage={
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/24/7297e19b-d8f4-4a80-9455-6c40c2b885b3.png.webp?ect=4g"
          }
          bgSize={"cover"}
        >
          <Flex w={"100%"} justifyContent={"space-between"} p={"10px"}>
            <Flex direction={"row"} justifyContent={"space-between"} w={"100%"}>
              <Box bg={"#db4444"} px={2} py={1} color={"white"} borderRadius={3}>
                -50%
              </Box>
            </Flex>
          </Flex>
          <Spacer />
          <Button color={"white"} bg={"#db4444"} gap={2} _hover={{ bg: "black" }}>
            <FaShoppingCart />
            <Text>Add to cart</Text>
          </Button>
        </Card>

        <Card
          h={"270px"}
          w={"260px"}
          bgImage={
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/24/7297e19b-d8f4-4a80-9455-6c40c2b885b3.png.webp?ect=4g"
          }
          bgSize={"cover"}
        >
          <Flex w={"100%"} justifyContent={"space-between"} p={"10px"}>
            <Flex direction={"row"} justifyContent={"space-between"} w={"100%"}>
              <Box bg={"#db4444"} px={2} py={1} color={"white"} borderRadius={3}>
                -50%
              </Box>
            </Flex>
          </Flex>
          <Spacer />
          <Button color={"white"} bg={"#db4444"} gap={2} _hover={{ bg: "black" }}>
            <FaShoppingCart />
            <Text>Add to cart</Text>
          </Button>
        </Card>
      </Grid>
    </Box>
  );
};

const Wishlist = React.memo(Component);
export default Wishlist;
