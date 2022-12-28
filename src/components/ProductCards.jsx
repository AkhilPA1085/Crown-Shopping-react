import { Container,Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from './basic/ProductCard';

import{products} from '../Data/data';



const StyledContainer = styled(Container)({
    padding: '100px 0px',
  }); 

const StyledLink = styled(Link)({
    textDecoration:'none'
})  

function ProductCards() {
  return (
    <>
        <StyledContainer>
            <Grid container spacing={2}>
                {products.map((product)=>(
                    <Grid item xs={12} md={2}>
                        <StyledLink to="/singleproduct/:id">
                            <ProductCard key={product.id} product={product}/>
                        </StyledLink>
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    </>
  )
}

export default ProductCards