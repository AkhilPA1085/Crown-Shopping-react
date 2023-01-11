import { Container } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import CheckoutItem from '../components/basic/CheckoutItem'

const StyledContainer = styled(Container)({
  padding: "100px 0px",
  height:"100vh",
});
const Cart = () => {
  return (
    <StyledContainer>
      <CheckoutItem/>
    </StyledContainer>
  )
}

export default Cart