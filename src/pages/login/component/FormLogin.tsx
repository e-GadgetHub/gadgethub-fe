import { Box, Button, FormControl, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ILogin } from '../../../type';
import { Link } from 'react-router-dom';

export const FormLogin = () => {
    const [email, setEmail] = useState<ILogin>({
        email:'',
        password:''
    });

  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmail((prev) => ({ ...prev, [name]:value}))
    };
  

    console.log(email)
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={'50px'} gap={'80px'}>
        <Box w={'50%'}>
            <Image src='../../../../src/assets/image/shopImage.png' w={''}/>
        </Box>
        <Box w={'50%'}  >
            <Text  fontSize={'3xl'} fontWeight={'bold'}>Login in to GadgetHub</Text>
            <Text fontSize={'sm'}>Enter your details below</Text>

            <Box mt={'60px'} display={'grid'} gap={'20px'} w={'80%'}>
                <FormControl>
                    <Input 
                    name='email' 
                    type='email' 
                    variant={'flushed'} 
                    borderBottom={'1px'}
                    placeholder='Email or your Phone Number' 
                    onChange={handleInputChange } 
                    />

                </FormControl>

                <FormControl>
                    <Input 
                    name='password' 
                    type='password' 
                    variant={'flushed'} 
                    placeholder='Password' 
                    borderBottom={'1px'}
                    onChange={handleInputChange } 
                    />

                </FormControl>
                
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={'45px'}>

                    <Button w={'30%'} color={'white'} bg={'#DB4444'} _hover={'none'}>Login</Button>

                    <Link to={''}>
                        <Text color={'#DB4444'}>Forget Passwords ?</Text>
                    </Link>

                </Box>

                <Box w={'100%'} display={'flex'} justifyContent={'center'} gap={'8px'} mt={'-20px'}>

                    <Text>Dont have a account ?</Text>
                    <Link to={'/register'}>
                        <Text textDecoration={'underline'}>Register</Text>
                    </Link>
     
                </Box>

            </Box>
        </Box>
    </Box>
  )
}
