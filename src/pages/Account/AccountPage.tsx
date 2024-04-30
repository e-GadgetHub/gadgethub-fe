import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const AccountPage = () => {
  return (
    <>
      <Stack p={24}>
        <Flex justifyContent={"space-between"} mb={10}>
          <Flex gap={2}>
            <Text>Home</Text>
            <Text>/</Text>
            <Text>My Account</Text>
          </Flex>
          <Flex gap={2}>
            <Text>Welcome, mas ganteng</Text>
          </Flex>
        </Flex>
        <Grid templateColumns="repeat(10, 1fr)" gap={6} w="100%">
          <GridItem colSpan={4}>
            <Stack>
              <Text fontWeight={"bold"}>Manage My Account</Text>
              <UnorderedList display={"flex"} flexDirection={"column"} gap={2}>
                <ListItem listStyleType={"none"}>
                  <Link>My Profile</Link>
                </ListItem>
                <ListItem listStyleType={"none"}>
                  <Link>Address Book</Link>
                </ListItem>
                <ListItem listStyleType={"none"}>
                  <Link>My Payment option</Link>
                </ListItem>
              </UnorderedList>
              <Text fontWeight={"bold"}>My Orders</Text>
              <UnorderedList display={"flex"} flexDirection={"column"} gap={2}>
                <ListItem listStyleType={"none"}>
                  <Link>My Returns</Link>
                </ListItem>
                <ListItem listStyleType={"none"}>
                  <Link>My Cancellations</Link>
                </ListItem>
              </UnorderedList>
              <Text fontWeight={"bold"}>My Whislist</Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={6}>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              <Text fontWeight={"bold"} mb={6}>
                Edit Your Profile
              </Text>
              <FormControl w="100%">
                <Flex direction={"column"} gap={6}>
                  <Flex gap={10}>
                    <Flex direction={"column"} w="100%">
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" placeholder="Mas" />
                    </Flex>
                    <Flex direction={"column"} w="100%">
                      <FormLabel>Last</FormLabel>
                      <Input type="text" placeholder="ganteng" />
                    </Flex>
                  </Flex>
                  <Flex gap={10}>
                    <Flex direction={"column"} w="100%">
                      <FormLabel>Email</FormLabel>
                      <Input type="email" placeholder="masganteng@gmail.com" />
                    </Flex>
                    <Flex direction={"column"} w="100%">
                      <FormLabel>Address</FormLabel>
                      <Input type="text" placeholder="jl damsari " />
                    </Flex>
                  </Flex>
                  <Flex direction={"column"} w="100%">
                    <FormLabel>Password Changes</FormLabel>
                    <Input type="text" placeholder="Current Password" />
                  </Flex>
                  <Flex direction={"column"} w="100%">
                    <Input type="text" placeholder="New Password" />
                  </Flex>
                  <Flex direction={"column"} w="100%">
                    <Input type="text" placeholder="Confirm New Password" />
                  </Flex>
                </Flex>
                <Flex gap={5} justifyContent={"right"} mt={5}>
                  <Button w={48}>Cancel</Button>
                  <Button w={48} colorScheme="red">
                    Save Changes
                  </Button>
                </Flex>
              </FormControl>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
};

export default AccountPage;
