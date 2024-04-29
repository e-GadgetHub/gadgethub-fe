import { Box, Button, HStack, Image, Input, Text, Th, Tr, useNumberInput } from "@chakra-ui/react";
import { ConvertNumber } from "../../../utils/ConvertNumber";
import { IBestSell } from "../../../type";
interface Iprops {
    item: IBestSell
}
export const InputQuantity = ( {item}:Iprops) => {
    const { formatToRupiah } = ConvertNumber();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps} =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  
  
  return (
    <Tr>
    <Th w={'25%'}>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Image src={`${item.image}`} w={"50px"} h={"50px"} />
        <Text>{item.name}</Text>
      </Box>
    </Th>
    <Th w={'25%'}>{formatToRupiah(item.price)}</Th>
    <Th w={'25%'}>
    <Box w={"150px"} >
      <HStack >
        <Button {...dec}>-</Button>
        <Input {...input} />
        <Button {...inc}>+</Button>
      </HStack>
    </Box>
    </Th>
    <Th w={'25%'}>{formatToRupiah(input.value * item.price)}</Th>
  </Tr>

  );
};
