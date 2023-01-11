import { Add,Close,Remove} from '@mui/icons-material';
import { CardMedia,Grid,IconButton,Typography } from '@mui/material';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { cartContext } from '../../contexts/CartContext';

const StyledGridContainer = styled(Grid)(({ theme }) => ({
    marginBottom:'20px',
    paddingBottom:'40px',
    borderBottom: `1px solid ${theme.colors.logo}`,
    alignItems:'center'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.colors.text,
    fontWeight: '700 !important',
    fontSize: '25px !important'
}));

function CheckoutItem() {
    const {cartItems,addItemToCart,removeItemToCart,clearCartItem,cartTotal} = useContext(cartContext);

    return (
        <>
    {cartItems.map((item) => {
        const {name,quantity,imageUrl,price} = item

        const handleDecreaseCartItem = ()=>removeItemToCart(item);
        const handleIncreaseCartItem = ()=>addItemToCart(item);
        const handleClearCartItem = ()=>clearCartItem(item);

        return <>
        <StyledGridContainer container>
            <Grid item md={3} xs={12}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={imageUrl}
                /> 
            </Grid>
            <Grid item md={3} xs={12}>
                <StyledTypography>{name}</StyledTypography>
            </Grid>
            <Grid item md={3} xs={12} sx={{ display:'flex',alignItems:'center' }}>
                <IconButton aria-label="previous" onClick={handleDecreaseCartItem}>
                    <Remove />
                </IconButton>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {quantity}
                </Typography>
                <IconButton aria-label="next" onClick={handleIncreaseCartItem}>
                    <Add />
                </IconButton>
            </Grid>
            <Grid item md={3} xs={12} sx={{ display:'flex',alignItems:'center',justifyContent: 'space-between' }}>
                {quantity} x ${price}

                <IconButton onClick={handleClearCartItem}>
                    <Close/>
                </IconButton>
            </Grid>
        </StyledGridContainer>
    </>
    })}

    <StyledGridContainer container>
        <Grid item md={9} xs={12}>
            <StyledTypography>Total</StyledTypography>
        </Grid> 
        <Grid item md={3} xs={12}>
            <StyledTypography>${cartTotal}</StyledTypography>
        </Grid> 
    </StyledGridContainer>
    </>
  )
}

export default CheckoutItem