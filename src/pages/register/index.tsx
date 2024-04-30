import React from "react";
import { Box, Button, FormControl, FormErrorMessage, Image, Input, Spinner, Text } from "@chakra-ui/react";
import { Controller, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import useValidateForm from "../../hooks/validation/formValidation";
import useRegister from "../../hooks/useRegister";
import useLoading from "../../hooks/useLoading";
import { IRegister } from "../../type";

const Component: React.FC = () => {
    const { handleSubmit, control } = useValidateForm();
    const { register } = useRegister();
    const { loading, toggleLoadingOn, toggleLoadingOff } = useLoading();

    function onSubmit(data: FieldValues) {
        toggleLoadingOn();
        try {
            register(data as unknown as IRegister);
        } catch (error) {
            console.log(error);
        } finally {
            toggleLoadingOff();
        }
    }
    return (
        <>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={"50px"} gap={"80px"}>

                <Box w={"50%"}>
                    <Image src="../../../../src/assets/image/shopImage.png" w={""} />
                </Box>

                <Box w={"50%"}>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>
                        Create an Account
                    </Text>
                    <Text fontSize={"sm"}>Enter your details below</Text>

                    <Box mt={"60px"} display={"grid"} gap={"20px"} w={"80%"}>
                        <Controller
                            control={control}
                            defaultValue={""}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field, fieldState }) => (
                                <FormControl isInvalid={!!fieldState.error?.message}>
                                    <Input {...field} variant={"flushed"} borderBottom={"1px"} placeholder="Name" />
                                    <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
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
                                    <Input
                                        type="email"
                                        {...field}
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
                            rules={{ required: "Password is required" }}
                            render={({ field, fieldState }) => (
                                <FormControl isInvalid={!!fieldState.error?.message}>
                                    <Input
                                        type="password"
                                        {...field}
                                        variant={"flushed"}
                                        placeholder="Password"
                                        borderBottom={"1px"}
                                    />
                                    <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
                                </FormControl>
                            )}
                        />

                        <Box my={"45px"} display={"grid"} gap={"10px"}>
                            <Button
                                w={"100%"}
                                color={"white"}
                                bg={"#DB4444"}
                                _hover={{ bg: "black", color: "white" }}
                                onClick={handleSubmit(onSubmit)}
                            >
                                Create Account
                                {loading && <Spinner />}
                            </Button>
                            <Link to={""}>
                                <Box
                                    w={"100%"}
                                    border={"1px"}
                                    borderColor="gray.200"
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    p={"8px"}
                                    gap={"10px"}
                                >
                                    <Image src="../../../../src/assets/image/googleicon.png" w={"8%"} />
                                    <Text>Register with Google</Text>
                                </Box>
                            </Link>

                            <Box display={"flex"} width={"100%"} justifyContent={"center"} gap={"8px"}>
                                <Text>Already have Account?</Text>
                                <Link to={"/login"}>
                                    <Text textDecor={"underline"}>
                                        Login
                                    </Text>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

const Register = React.memo(Component);
export default Register;
