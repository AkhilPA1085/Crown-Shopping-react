import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';
 
const StyledCard = styled(Card)({
    marginBottom:'20px',
})

function CartItem({cartItem}) {
    const {name,quantity,imageUrl,price} = cartItem;
  return (
    <>
    <StyledCard sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={imageUrl}
            alt={name}
        /> 
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="p">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="span">
            {quantity} x  ${price}
          </Typography>
        </CardContent>
      </Box>
    </StyledCard>
    </>
  )
}

export default CartItem