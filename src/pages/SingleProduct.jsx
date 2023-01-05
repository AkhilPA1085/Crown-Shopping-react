import {
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import StyledButton,{BUTTON_TYPES} from "../components/basic/StyledButton";

const StyledContainer = styled(Container)({
  padding: "100px 0px",
});

const StyledCardActions = styled(CardActions)({
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
});

const SingleProduct = () => {
  return (
    <>
      <StyledContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 500 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhHSfHUTeXVsOppMMt6CUVY7i164xLVte6w&usqp=CAU"
              />

              <StyledCardActions>
                <StyledButton buttonType={BUTTON_TYPES.inverted}>buy now</StyledButton>
                <StyledButton buttonType={BUTTON_TYPES.inverted}>add to cart</StyledButton>
              </StyledCardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>Product Name</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              cupiditate odit impedit dolor itaque laborum dolores aliquam
              tenetur sequi nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              cupiditate odit impedit dolor itaque laborum dolores aliquam
              tenetur sequi nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              cupiditate odit impedit dolor itaque laborum dolores aliquam
              tenetur sequi nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              cupiditate odit impedit dolor itaque laborum dolores aliquam
              tenetur sequi nobis.
            </Typography>

            <Typography>$40.00</Typography>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default SingleProduct;
