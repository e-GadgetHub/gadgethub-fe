import React from 'react'
import { Navbar } from '../../../component/Navbar'
import { Box } from '@chakra-ui/react'
import { Footer } from '../../Home/component/Footer'
import { FormRegister } from './FormRegister'

export const Register = () => {
  return (
    <>
        <Navbar/>
      
        <Box>
            <FormRegister/>
        </Box>

        <Box bg={'black'}>
            <Footer/>
        </Box>
    </>
  )
}
