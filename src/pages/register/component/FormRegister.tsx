import { Box, Button, FormControl, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IRegister } from '../../../type';

export const FormRegister = () => {
    const [regis, setRegis] = useState<IRegister>({
        name:'',
        email:'',
        password:''
    });

  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegis((prev) => ({ ...prev, [name]:value}))
    };
    console.log(regis)
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={'50px'} gap={'80px'}>
        <Box w={'50%'}>
            <Image src='../../../../src/assets/image/shopImage.png' w={''}/>
        </Box>
        <Box w={'50%'}  >
            <Text  fontSize={'3xl'} fontWeight={'bold'}>Create an Account</Text>
            <Text fontSize={'sm'}>Enter your details below</Text>

            <Box mt={'60px'} display={'grid'} gap={'20px'} w={'80%'}>
                <FormControl>
                    <Input 
                    name='name' 
                    type='text' 
                    variant={'flushed'} 
                    borderBottom={'1px'}
                    placeholder='Name' 
                    onChange={handleInputChange } 
                    />

                </FormControl>

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
                
                <Box my={'45px'} display={'grid' } gap={'10px'}>

                    <Button w={'100%'} color={'white'} bg={'#DB4444'} _hover={'none'}>Create Account</Button>
                    <Link to={''}>
                        <Box w={'100%'} border={'1px'} borderColor='gray.200' display={'flex'} justifyContent={'center'} alignItems={'center'} p={'8px'} gap={'10px'}>
                            <Image src='../../../../src/assets/image/googleicon.png' w={'8%'}/>
                            <Text>Sign Up with Google</Text>
                        </Box>
                    </Link>

                    
                    <Box display={'flex'} width={'100%'} justifyContent={'center'} gap={'8px'}>
                        <Text>Already have Account?</Text>
                        <Link to={'/login'}>
                            <Text textDecor={'underline'}>Login</Text>
                        </Link>
                    </Box>
                </Box>


            </Box>
        </Box>
    </Box>

    )
}
