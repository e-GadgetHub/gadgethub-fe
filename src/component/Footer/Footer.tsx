import { Box, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { FaApple, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Box p={'50px'} color={'white'} display={'flex'} justifyContent={'center'}  gap={'20px'}>
        <Box w={'20%'} display={'flex'} flexDir={'column'} gap={'15px'} >
            <Text fontWeight={'Bold'} fontSize={'xl'}>GEDGETHUB</Text>
            <Text fontSize={'md'}>Subscribe</Text>
            <Text fontSize={'10px'}>Get 10% all your first order</Text>
            <InputGroup w={'70%'}>
                <Input ></Input>
                <InputRightElement>
                    <IoSend />
                </InputRightElement>
            </InputGroup>
        </Box>
        
        <Box w={'20%'} display={'flex'} flexDir={'column'} gap={'15px'} >
            <Text fontSize={'xl'} >Support</Text>
            <Text fontSize={'10px'}>Jakarta utara, No. 12 Super Village, Indonesia</Text>
            <Text fontSize={'10px'}>gedget@gmail.com</Text>
            <Text fontSize={'10px'}>+62234-4321-1234</Text>
        </Box>

        <Box w={'20%'} display={'flex'} flexDir={'column'} gap={'15px'} >
            <Text fontSize={'xl'} >Account</Text>
            <Text fontSize={'10px'}> <Link to={'/login'}>Login</Link> / <Link to={'/register'}>Register</Link> </Text>
            <Text fontSize={'10px'}><Link to={'/cart'}>Cart</Link></Text>
            <Text fontSize={'10px'}>Wishlist</Text>
            <Text fontSize={'10px'}>Shop</Text>
        </Box>

        <Box w={'20%'} display={'flex'} flexDir={'column'} gap={'15px'} >
            <Text fontSize={'xl'} >Quick Link</Text>
            <Text fontSize={'10px'}>Privacy Policy</Text>
            <Text fontSize={'10px'}>Terms Of Us</Text>
            <Text fontSize={'10px'}>FAQ</Text>
            <Text fontSize={'10px'}>Contact</Text>
        </Box>

        <Box w={'20%'} display={'flex'} flexDir={'column'} gap={'15px'} >
            <Text fontSize={'xl'} >Download App</Text>
            <Text fontSize={'10px'}>Save $3 with App New User Only</Text>
            <Box display={'flex'} gap={'5px'}>
                <Box w={'40%'}>
                    <Image src='../../../../src/assets/image/Qr_Code.png' h={'100%'}/>
                </Box>
                <Box w={'60%'} display={'flex'} flexDir={'column'} gap={'5px'}>
                    <Box display={'flex'} border={'1px'} h={'50%'} p={'3px'} rounded={'sm'}>
                        <Image src='../../../../src/assets/image/logo_google_play.png' w={'30%'}/>
                        <Box p={'2px'}>
                            <Text fontSize={'8px'}>GET IN ON</Text>
                            <Text fontSize={'13px'}>Google Play</Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} border={'1px'} h={'50%'} p={'3px'} rounded={'sm'}>
                        <FaApple size={34} color='white' />
                        <Box p={'2px'}>
                            <Text fontSize={'8px'}>Download On the</Text>
                            <Text fontSize={'13px'}>App Store</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box display={'flex'} gap={'30px'}>
                <FaFacebookF size={25} color='white' />
                <FaTwitter size={25} color='white' />
                <FaInstagram size={25} color='white'  />
                <FaLinkedin size={25} color='white' />
            </Box>
        </Box>

    </Box>
  )
}
