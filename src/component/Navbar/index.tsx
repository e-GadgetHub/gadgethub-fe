import { Box, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <Box display={'flex'} h={'75px'} justifyContent={'center'} alignItems={'center'} borderBottom={'1px solid'} bg={'transparent'}>
        <Box  w={'90%'} display={'flex'} justifyContent={'space-between'}>
            <Box w={'20%'}>
                <Image src='../../../src/assets/image/logo-e-comers.png'/>
            </Box>
            <Box display={'flex'} w={'60%'} gap={'25px'} justifyContent={'center'} alignItems={'center'} >
                <Text>Home</Text>
                <Text>Contact</Text>
                <Text>About</Text>
                <InputGroup bg={'white'} w={'50%'}>
                    <InputLeftElement>
                        <FaSearch />
                    </InputLeftElement>
                    <Input type='text' ></Input>
                </InputGroup>

            </Box>
            <Box display={'center'} w={'20%'} justifyContent={'center'} alignItems={'center'} gap={5}>
                <FaShoppingCart size={30} />
                <Text>Login</Text>
            </Box>

        </Box>
    </Box>
  )
}
