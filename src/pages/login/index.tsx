import React from "react";
import { Box, Button, FormControl, FormErrorMessage, Image, Input, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useValidateForm from "../../hooks/validation/formValidation";
import useLogin from "../../hooks/useLogin";
import useLoading from "../../hooks/useLoading";
import { Controller, FieldValues } from "react-hook-form";
import { ILogin } from "../../type";

const Component: React.FC = () => {
  const { handleSubmit, control } = useValidateForm();
  const { login } = useLogin();
  const { loading, toggleLoadingOff, toggleLoadingOn } = useLoading();

  function onSubmit(data: FieldValues) {
    toggleLoadingOn();
    try {
      login(data as unknown as ILogin);
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoadingOff();
    }
  }

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"50px"}
        gap={"80px"}
      >
        <Box w={"50%"}>
          <Image src="../../../../src/assets/image/shopImage.png" w={""} />
        </Box>
        <Box w={"50%"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Login in to GadgetHub
          </Text>
          <Text fontSize={"sm"}>Enter your details below</Text>

          <Box mt={"60px"} display={"grid"} gap={"20px"} w={"80%"}>
            <Controller
              control={control}
              defaultValue={""}
              name="email"
              rules={{ required: "Email is Required" }}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <Input
                    { ...field }
                    type="email"
                    variant={"flushed"}
                    borderBottom={"1px"}
                    placeholder="Email or your Phone Number"
                  />
                  <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
            control={control}
            defaultValue={""}
            name="password"
            rules={{ required: "Password is required"}}
            render={({ field, fieldState})=> (

                <FormControl isInvalid={!!fieldState.error?.message}>
                    <Input
                        type="password"
                        { ...field}
                        variant={"flushed"}
                        placeholder="Password"
                        borderBottom={"1px"}
                    />
                    <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
                </FormControl>
                )}
            />

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              my={"45px"}
            >
              <Button w={"30%"} color={"white"} bg={"#DB4444"} _hover={{ bg: "black", color: "white" }} onClick={handleSubmit(onSubmit)}>
                Login
                {loading && <Spinner/>}
              </Button>

              <Link to={""}>
                <Text color={"#DB4444"}>Forget Passwords ?</Text>
              </Link>
            </Box>

            <Box
              w={"100%"}
              display={"flex"}
              justifyContent={"center"}
              gap={"8px"}
              mt={"-20px"}
            >
              <Text>Dont have a account ?</Text>
              <Link to={"/register"}>
                <Text textDecoration={"underline"}>Register</Text>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const Login = React.memo(Component);
export default Login;
