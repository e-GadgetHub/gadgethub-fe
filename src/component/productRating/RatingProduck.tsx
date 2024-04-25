import { Box, Flex, Icon } from '@chakra-ui/react';
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
interface IR{
    rating:number
}
export const RatingProduck = ({ rating }: IR) => {

    const fullStars = Math.floor(rating);
  // Mendapatkan apakah ada setengah bintang
  const hasHalfStar = rating % 1 !== 0;

  // Membuat array untuk menyimpan bintang-bintang
  const starsArray = [];
  for (let i = 0; i < fullStars; i++) {
    starsArray.push(<Icon as={FaStar} key={i} color="yellow.400" />);
  }
  if (hasHalfStar) {
    starsArray.push(<Icon as={FaStarHalfAlt} key="half" color="yellow.400" />);
  }
  // Mengisi sisa bintang dengan bintang kosong
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push(<Icon as={FaStar} key={`empty${i}`} color="gray.400" />);
  }
  
  return (
    <Flex alignItems="center">
      <Box>{starsArray}</Box>
      <Box ml={2}>{rating.toFixed(1)}</Box>
  </Flex>
  )
}
