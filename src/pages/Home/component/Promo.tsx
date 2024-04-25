import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import dumy from '../../../mock/reqProduct.json'
import { Ireq } from '../../../type'

export const Promo = () => {
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
    <Box display={'flex'} bgImage={'../../../../src/assets/image/BGCARD.jpeg'}  backgroundSize={'cover'} w={'85%'} rounded={'10px'} m={'20px'}  justifyContent={'space-between'}>
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
  )
}
