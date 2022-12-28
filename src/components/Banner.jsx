import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'

import 'swiper/css';
import { Autoplay, EffectFade, Pagination } from 'swiper';

import { Container, Grid } from '@mui/material'
import styled from 'styled-components'
import StyledButton from './basic/StyledButton';

const StyledBackground = styled.img`
    position: relative;
    width: 100%;
    height:70vh;

    @media(max-width:${({theme})=>theme.media.tab}){
        height: 100vh;
    }
`
const StyledBannerImage = styled.img` 
    width: 100%;
    height:50vh;
    object-fit: contain;
    overflow: hidden;

    @media(max-width:${({theme})=>theme.media.tab}){
        height: 100%;
    }
`

const StyledContainer = styled(Container)({
    position: "absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    padding:'7rem 0rem',

});

const StyledHeading = styled.h1` 
    color:${({theme})=>theme.colors.logo};
    font-size: 34px;
    font-weight: 700;

    @media(max-width:${({theme})=>theme.media.tab}){
        font-size: 22px;
    }
`


const StyledGridContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}); 



function Banner() {
  return (
    <>
        <Swiper 
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay,EffectFade]}
            autoplay={{ delay: 2000 }}
            effect='fade'
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
              <StyledBackground src="https://www.pngmagic.com/product_images/gray-background.jpg" alt="" />
              <StyledContainer>
                <StyledGridContainer container>
                  <Grid item xs={12} md={6}>
                      <StyledHeading>Welcome to Crown Shopping</StyledHeading>
                      <StyledButton value='Shop now'/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <StyledBannerImage src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-review-2763605-2307102.png" alt="" />
                  </Grid>
                </StyledGridContainer>
              </StyledContainer>
            </SwiperSlide>
            <SwiperSlide>
              <StyledBackground src="https://www.pngmagic.com/product_images/gray-background.jpg" alt="" />
              <StyledContainer>
                <StyledGridContainer container>
                  <Grid item xs={12} md={6}>
                      <StyledHeading>Welcome to Crown Shopping</StyledHeading>
                      <StyledButton value='Shop now'/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <StyledBannerImage src="https://cdni.iconscout.com/illustration/premium/thumb/couple-shopping-online-5300071-4423090.png" alt="" />
                  </Grid>
                </StyledGridContainer>
              </StyledContainer>
            </SwiperSlide>
            <SwiperSlide>
              <StyledBackground src="https://www.pngmagic.com/product_images/gray-background.jpg" alt="" />
              <StyledContainer>
                <StyledGridContainer container>
                  <Grid item xs={12} md={6}>
                      <StyledHeading>Welcome to Crown Shopping</StyledHeading>
                      <StyledButton value='Shop now'/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <StyledBannerImage src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-3736818-3122116.png" alt="" />
                  </Grid>
                </StyledGridContainer>
              </StyledContainer>
            </SwiperSlide>

        </Swiper>
    </>
  )
}

export default Banner