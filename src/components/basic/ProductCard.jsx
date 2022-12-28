import { Card,CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


const StyledCardContent = styled(CardContent)({
  textAlign:'center'
});


function ProductCard({product}) {
  return (
    <>
    
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={product.img}
          title=""
        />
        <StyledCardContent>
          <Typography>
            {product.title}
          </Typography>
        </StyledCardContent>
      </Card>
    </>
  )
}

export default ProductCard