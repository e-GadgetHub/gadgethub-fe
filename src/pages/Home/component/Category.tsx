import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'

export const Category = () => {
  return (
   <Box display={'flex'} justifyContent={'space-between'} w={'50%'} alignItems={'center'} >
        <Box  w={'30%'} p={'15px'} display={'flex'} alignItems={'center'} gap={'10px'}>
            <MdComputer size={'30px'}/>
            <Text fontSize={'15px'}>Leptop</Text>
        </Box>

        <Box  w={'30%'} p={'15px'} display={'flex'} alignItems={'center'} gap={'10px'}>
            <GiSmartphone size={20} />
            <Text fontSize={'15px'}>Smartphone</Text>
        </Box>

        <Box  w={'30%'} p={'15px'} display={'flex'} alignItems={'center'} gap={'10px'}>
            <FaHeadphonesAlt size={20}  />
            <Text fontSize={'15px'}>Accessories</Text>
        </Box>
    </Box>
  )
}
