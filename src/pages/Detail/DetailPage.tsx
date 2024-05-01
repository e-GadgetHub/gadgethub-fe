import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RatingProduck } from "../../component/productRating/RatingProduck";
import { FaRegHeart } from "react-icons/fa";
import { PiVanDuotone } from "react-icons/pi";
import { GrPowerCycle } from "react-icons/gr";
import { CardBestSelling } from "../Home/component/CardBestSelling";
import React from "react";
import domy from "../../mock/databestselling.json";
import { IBestSell } from "../../type";

const DetailPage = () => {
  const [data, setData] = React.useState<IBestSell[]>([]);

  React.useEffect(() => {
    setData(domy);
  }, []);
  return (
    <>
      <Flex px={24} py={14} gap={2}>
        <Text>Account</Text>
        <Text>/</Text>
        <Text>Gaming</Text>
        <Text>/</Text>
        <Text>Stick PS 5</Text>
      </Flex>
      <Grid templateColumns="repeat(10, 1fr)" gap={6} w="100%" px={24}>
        <GridItem colSpan={1}>
          <Grid templateRows="repeat(5, 1fr)" gap={6} alignItems={"center"}>
            <GridItem>
              <Box boxSize="auto">
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Box>
            </GridItem>
            <GridItem>
              <Box boxSize="auto">
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Box>
            </GridItem>
            <GridItem>
              <Box boxSize="auto">
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Box>
            </GridItem>
            <GridItem>
              <Box boxSize="auto">
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Box>
            </GridItem>
            <GridItem>
              <Box boxSize="auto">
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={5}>
          <Box>
            <Image w="100%" h="100%" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
        </GridItem>
        <GridItem colSpan={4} ml={5}>
          <Box>
            <Heading py={2}>Product Name</Heading>
            <Box py={2}>
              <RatingProduck rating={5} />
            </Box>
            <Text>Rp 160.000</Text>
            <Box borderBottom="1px" borderColor={"gray"} py={6}>
              <Text align={"justify"}>
                Deskripsi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet minima veniam, facilis
                aperiam sapiente, consequatur et, ut optio labore esse atque voluptas. Impedit iure aliquam ab magni
                numquam quis!
              </Text>
            </Box>
            <HStack py={6}>
              <Text>Colors:</Text>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="red" value="1">
                    Red
                  </Radio>
                  <Radio colorScheme="green" value="2">
                    Green
                  </Radio>
                </Stack>
              </RadioGroup>
            </HStack>
            <HStack>
              <Text>Size: </Text>
              <Stack spacing={5} direction="row">
                <Button border="1px" w={5}>
                  s
                </Button>
                <Button border="1px" w={5}>
                  m
                </Button>
                <Button border="1px" colorScheme="red" w={5}>
                  l
                </Button>
                <Button border="1px" w={5}>
                  lg
                </Button>
                <Button border="1px" w={5}>
                  xl
                </Button>
              </Stack>
            </HStack>
            <HStack py={6}>
              <Stack direction="row" spacing={-1} align="center">
                <Button colorScheme="black" variant="outline" borderRadius={0}>
                  -
                </Button>
                <Box
                  border="1px"
                  borderColor={"black"}
                  borderRadius={0}
                  h="40px"
                  w="100px"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text>1</Text>
                </Box>
                <Button colorScheme="black" variant="outline" borderRadius={0}>
                  +
                </Button>
              </Stack>
              <Button colorScheme="red" w={52}>
                Buy Now
              </Button>
              <IconButton variant="outline" colorScheme="black" aria-label="Send email" icon={<FaRegHeart />} />
            </HStack>
            <Box w="100%" border="1px black solid" p={6}>
              <HStack>
                <Box w="20%" h="100%">
                  <PiVanDuotone size={"50px"} />
                </Box>
                <Flex direction={"column"} w="100%">
                  <Text fontWeight={"bold"}>Free Delivery</Text>
                  <Text fontSize={12}>enter your postal code for delivery availability</Text>
                </Flex>
              </HStack>
            </Box>
            <Box w="100%" border="1px black solid" p={6}>
              <HStack>
                <Box w="20%" h="100%">
                  <GrPowerCycle size={"50px"} />
                </Box>
                <Flex direction={"column"} w="100%">
                  <Text fontWeight={"bold"}> Return Delivery</Text>
                  <Text fontSize={12}>Free 30 days delivery returns.</Text>
                </Flex>
              </HStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Flex w={"100%"} mt={"10px"}>
        <Box bg={"#db4444"} w={"18px"} h={"35px"} borderRadius={3} me={3}></Box>
        <Text fontWeight={"bold"} fontSize={"20px"} mt={"3px"}>
          Related Items
        </Text>
      </Flex>
      <Flex px={24} pb={24}>
        {data.map((item, index) => (
          <CardBestSelling key={index} data={item} />
        ))}
      </Flex>
    </>
  );
};

export default DetailPage;
