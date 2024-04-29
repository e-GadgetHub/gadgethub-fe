import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import data from "../../../mock/reqProduct.json";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Promo = () => {
  return (
    <Swiper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "auto",
      }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      speed={1000}
      centeredSlides={true} // Pindahkan prop centeredSlides ke sini
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box
            display={"flex"}
            bgImage={"../../../../src/assets/image/BGCARD.jpeg"}
            backgroundSize={"cover"}
            w={"85%"}
            rounded={"10px"}
            m={"20px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Box justifyItems={"center"} p={"100px"} color={"white"}>
              <Text fontSize={"35px"} fontWeight={"bold"}>
                {item?.name}
              </Text>
              <br></br>
              <Text>Spesifikasi : </Text>
              <Text>Ram : {item?.spec?.ram}</Text>
              <Text>Storage : {item?.spec?.storage}</Text>
              <Text>Kamera : {item?.spec?.kamera}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Image src={`../../${item?.image}`} w={"70%"} />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
