import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import useValidateForm from "../../hooks/validation/formValidation";
import { useCheckout } from "../../hooks/useCheckout";
import { Controller, FieldValues } from "react-hook-form";
import { useGetCountry } from "../../hooks/country/useGetCountry";
import data from "../../mock/databestselling.json";
import { ConvertNumber } from "../../utils/ConvertNumber";
import { ICheckout } from "../../type";

const Component: React.FC = () => {
  const [dis, setDis] = React.useState(false);
  const [provName, setProvName] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [regencyName, setRegencyName] = React.useState("");
  const { handleSubmit, control } = useValidateForm();
  const { checkout } = useCheckout();
  const { getProvince, province, getCity, city, getRegency, regency } =
    useGetCountry();

  const onSubmit = (data: FieldValues) => {
    data.province = provName;
    data.city = cityName;
    data.district = regencyName;
    console.log(data);
    checkout(data as unknown as ICheckout);
  };

  const { formatToRupiah } = ConvertNumber();
  React.useEffect(() => {
    getProvince();
  }, []);

  return (
    <Box w={"100%"} display={"grid"} justifyItems={"center"}>
      <Box
        display={"flex"}
        color={"#C1C0C1"}
        fontSize={"15px"}
        gap={"20px"}
        w={"80%"}
        my={"30px"}
      >
        <Text>Home</Text>
        <Text> / </Text>
        <Text> Cart</Text>
        <Text> / </Text>
        <Text color={"black"}> Checkout</Text>
      </Box>

      <Box w={"80%"}>
        <Text fontSize={"4xl"} mb={"30px"}>
          Billing Details
        </Text>
        <Box w={"100%"} display={"flex"} gap={"2rem"} py={"20px"}>
          <Box w={"50%"} display={"grid"} gap={"2rem"}>
            <Controller
              control={control}
              defaultValue={""}
              name="firstName"
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>First Name</FormLabel>
                  <Input {...field} size={"md"} type="text" />
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name="province"
              rules={{ required: "Province is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>Province</FormLabel>
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      const selectedId = e.target.value;
                      const selectedName =
                        province.find((item) => item.id === selectedId)?.name ||
                        ""; // Ambil nama provinsi dari array province
                      setProvName(selectedName); // Simpan nama provinsi yang dipilih ke dalam state
                      getCity(selectedId);
                    }}
                  >
                    {province.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name="city"
              rules={{ required: "City is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>City</FormLabel>
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      const selectedId = e.target.value;
                      const selectedName =
                        city.find((item) => item.id === selectedId)?.name || ""; // Ambil nama kota dari array city
                      setCityName(selectedName); // Simpan nama kota yang dipilih ke dalam state
                      getRegency(selectedId);
                    }}
                  >
                    {city.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        onClick={() => setRegencyName(item.name)}
                      >
                        {item.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name="district"
              rules={{ required: "district is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>District</FormLabel>
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      const selectedId = e.target.value;
                      const selectedName =
                        regency.find((item) => item.id === selectedId)?.name ||
                        ""; // Ambil nama kota dari array city
                      setRegencyName(selectedName); // Simpan nama kota yang dipilih ke dalam state
                    }}
                  >
                    {regency.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name="address"
              rules={{ required: "Address is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>Street Address</FormLabel>
                  <Textarea {...field} size={"md"} />
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              defaultValue={""}
              name="phoneNumber"
              rules={{ required: "Phone number is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input {...field} size={"lg"} type="number" />
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              defaultValue={""}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} size={"lg"} type="email" />
                  <FormErrorMessage>
                    {fieldState.error?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />
          </Box>

          <Box w={"50%"}>
            <Box w={"100%"} display={"grid"} gap={"1rem"}>
              {data.map((item, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
                    <Image src={item.image} w={"10%"} />
                    <Text>{item.name}</Text>
                  </Box>
                  <Text>{formatToRupiah(item.price)}</Text>
                </Box>
              ))}

              <Box w={"100%"} display={"grid"} gap={"20px"} p={"15px"}>
                <Text>Total</Text>
                <Flex justifyContent={"space-between"} borderBottom={"1px"}>
                  <Text>SubTotal: </Text>
                  <Text>Rp. 1.000.000</Text>
                </Flex>
                <Flex justifyContent={"space-between"} borderBottom={"1px"}>
                  <Text>Shipping: </Text>
                  <Text>Free</Text>
                </Flex>
                {dis && (
                  <Flex justifyContent={"space-between"} borderBottom={"1px"}>
                    <Text>Coupon: </Text>
                    <Text>Rp. 100.000</Text>
                  </Flex>
                )}
                <Flex justifyContent={"space-between"}>
                  <Text>Total: </Text>
                  <Text>Rp. 10.000.000</Text>
                </Flex>

                <Flex gap={"10px"}>
                  <Input placeholder="Enter your coupon code" border={"1px"} />
                  <Button
                    color={"white"}
                    bg={"#DB4444"}
                    border={"1px"}
                    _hover={{ bg: "black", color: "white" }}
                    onClick={() => {
                      setDis(true);
                    }}
                  >
                    Apply
                  </Button>
                </Flex>

                <Button
                  color={"white"}
                  bg={"#DB4444"}
                  border={"1px"}
                  _hover={{ bg: "black", color: "white" }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Place Order
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Checkout = React.memo(Component);
export default Checkout;
