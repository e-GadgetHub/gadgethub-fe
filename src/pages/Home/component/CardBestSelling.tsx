import { Box,  Image, Text } from '@chakra-ui/react'
import { RatingProduck } from '../../../component/productRating/RatingProduck'
import { IBestSell } from '../../../type'
import { ConvertNumber } from '../../../utils/ConvertNumber'
interface Iprop {
  data: IBestSell
}

export const CardBestSelling = ({data}:Iprop) => {

  const { formatToRupiah } = ConvertNumber()

  return (
    <Box shadow={'none'} w={'20%'} p={'10px'} >
        <Box display={'flex'} justifyContent={'center'} bg={'#F5F5F5'} mb={'10px'} p={'20px'}>
            <Image w={'75%'}  src={`${data?.image}`}/>
        </Box>
        <Box>
            <Text>{data.name}</Text>
            <Text color={'#DB4444'}>{formatToRupiah(data.price)}</Text>
            <RatingProduck rating={data.rating}/>
        </Box>
    </Box>
  )
}
