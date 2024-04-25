import React from 'react'
import { Navbar } from '../../component/Navbar'
import { Footer } from '../Home/component/Footer'
import { Box } from '@chakra-ui/react'
import { FormLogin } from './component/FormLogin'

export const Login = () => {
  return (
    <>
      <Navbar/>
      
      <Box>
        <FormLogin/>
      </Box>

      <Box bg={'black'}>
        <Footer/>
      </Box>
    </>
  )
}
