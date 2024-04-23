import { Navbar } from '../../../component/Navbar'
import { Box, Text } from '@chakra-ui/react'
import { Category } from './Category'
import { BestSelling } from './BestSelling'
import { NewAririval } from './NewAririval'
import { Superiority } from './Superiority'
import { Footer } from './Footer'
import { Promo } from './Promo'
export const Home = () => {

  return (
    <>
        <Navbar/>
        <Box display={'grid'}  justifyItems={'center'} gap={'10px'}>

          <Promo/>

          <Box display={'flex'} w={'100%'} justifyContent={'center'} borderY={'1px'}>
            <Category/>
          </Box>

          <Box w={'85%'} my={'20px'}>
            <BestSelling/>
          </Box>

          <Box w={'85%'} minH={'600px'} my={'10px'} >
          <Text fontWeight={'bold'} fontSize={'20px'}>New Arrival</Text>
            <NewAririval/>
          </Box>

          <Box w={'85%'} my={'70px'} >
            <Superiority/>
          </Box>

          <Box w={'100%'} minH={'250px'} bg={'black'}>
            <Footer/>
          </Box>
        </Box>
    </>
  )
}
