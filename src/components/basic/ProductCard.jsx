import { Card,CardActions,CardContent, CardMedia, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { cartContext } from '../../contexts/CartContext';
import StyledButton, { BUTTON_TYPES } from './StyledButton';


const StyledCard = styled(Card)({
  position:'relative',
  cursor:'pointer',
  height:'200px',

  '&:hover >*':{
      transform:'translateY(0%)'
  }
});

const StyledCardMedia = styled(CardMedia)({
  position:'absolute',
  top:0,
  bottom:0,
  left:0,
  right:0,
  height: "100%",
  width: "100%"
});

const StyledCardContent = styled(CardContent)({
  position:'relative',
  backgroundColor: "transparent"
});

const StyledCardActions = styled(CardActions)({
  position:'relative'
});

const StyledContentContainer = styled.div` 
  position: relative;
  padding: 50px 0px;
  background-color: rgb(255,255,255,0.75);
  transform: translateY(200%);
  transition: transform 0.5s;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`

const CartButton = styled(StyledButton)({
  width: '100%',
})


function ProductCard({product}) {
  const {addItemToCart} = useContext(cartContext);
  const addProductToCart = () => addItemToCart(product);
  
  return (
    <>
    
    <StyledCard>
            <StyledCardMedia
            image={product.imageUrl}
            title=""
            />

            <StyledContentContainer className='content-container'>
                <StyledCardContent>
                    <h1>{product.name}</h1>
                </StyledCardContent>

                <StyledCardActions>
                    <CartButton buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>add to cart</CartButton>
                </StyledCardActions>
            </StyledContentContainer>    
        </StyledCard>
    </>
  )
}

export default ProductCard