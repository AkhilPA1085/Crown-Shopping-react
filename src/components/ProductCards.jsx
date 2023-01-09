import { Container,Grid } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from './basic/ProductCard';

import SHOP_DATA from "../Data/shop-data.json"
import { productContext } from '../contexts/ProductsContext';


const StyledContainer = styled(Container)({
    padding: '100px 0px',
  }); 

const StyledLink = styled(Link)({
    textDecoration:'none'
})  

function ProductCards() {

    const {products} = useContext(productContext)

  return (
    <>
        <StyledContainer>
            <Grid container spacing={2}>
                {products.map((product)=>(
                    <Grid item xs={12} md={2} key={product.id}>
                        <StyledLink to="/singleproduct/:id">
                            <ProductCard product={product}/>
                        </StyledLink>
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    </>
  )
}

export default ProductCards