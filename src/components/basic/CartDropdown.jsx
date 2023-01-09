import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import StyledButton, { BUTTON_TYPES } from './StyledButton'

const StyledMenuContainer = styled.div` 
  position: absolute;
  right: 0;
  top: 60px;
  left: auto;
  bottom: auto;
  background-color: #fff;
  padding: 20px;
  border: 1px solid ${({theme})=>theme.colors.logo};
`

const StyledMenuList = styled.ul`
  list-style: none;
  height: 250px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  scrollbar-width: none;
`

const StyledCartButton = styled(StyledButton)({
  width:'100%'
})

function CartDropdown({open,handleClose}) {

  return (
    <StyledMenuContainer>
        <StyledMenuList>
          <li>Menu 1</li>
          <li>Menu 1</li>
          <li>Menu 1</li>
          <li>Menu 1</li>
          <li>Menu 1</li>
          <li>Menu 1</li>
          <li>Menu 1</li>
          <li>Menu 1</li>
        </StyledMenuList>
        <StyledCartButton buttonType={BUTTON_TYPES.inverted}>Go to checkout</StyledCartButton>
    </StyledMenuContainer>
  )
}

export default CartDropdown