import React, { useEffect, useState } from 'react'
import { Navbar } from '../../../component/Navbar'
import dumy from '../../../mock/reqProduct.json'
import { Ireq } from '../../../type'
import { Box,  Image, Text } from '@chakra-ui/react'
import { Category } from './Category'
import { BestSelling } from './BestSelling'
import { NewAririval } from './NewAririval'
import { Superiority } from './Superiority'
import { Footer } from './Footer'
export const Home = () => {
  const [ data, setData ] = useState<Ireq>()
  const [ currentIndex, setCurrentIndex ] = useState(0)

  useEffect(()=> {
    setTimeout(()=>{
      if ( currentIndex <= 2) {
        setCurrentIndex((prev)=> prev + 1)
      } 
    }, 3000)

    if ( currentIndex > 2) {
      setCurrentIndex(0)
    }
    setData(dumy[currentIndex])

  },[ currentIndex])
  return (
    <>
        <Navbar/>
        <Box display={'grid'}  justifyItems={'center'} gap={'10px'}>
          <Box display={'flex'} bgImage={'../../../../src/assets/image/BGCARD.jpeg'} w={'85%'} rounded={'10px'} m={'20px'}  justifyContent={'space-between'}>
            <Box justifyItems={'center'} p={'100px'} color={'white'}>
              <Text fontSize={'35px'} fontWeight={'bold'}>{data?.name}</Text><br></br>
              <Text>Spesifikasi : </Text>
              <Text>Ram : {data?.spec?.ram}</Text>
              <Text>Storage : {data?.spec?.storage}</Text>
              <Text>Kamera : {data?.spec?.kamera}</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'}> 
              <Image src={`../../${data?.image}`} w={'70%'} />
            </Box>
          </Box>

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
