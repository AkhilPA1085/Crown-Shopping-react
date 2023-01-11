import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { cartContext } from '../contexts/CartContext'
import CartItem from './basic/CartItem'
import StyledButton, { BUTTON_TYPES } from './basic/StyledButton'

const StyledMenuContainer = styled.div` 
  position: absolute;
  top: 60px;
  left: auto;
  bottom: auto;
  background-color: #fff;
  padding: 20px;
  border: 1px solid ${({theme})=>theme.colors.logo};

  @media (max-width: ${({ theme }) => theme.media.lg}) {
    right:0;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    right:auto;
  }
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

const StyledLink = styled(Link)({
  textDecoration:"none",
  color:'inherit',
})

function CartDropdown() {
  const {cartItems} = useContext(cartContext);

  return (
    <StyledMenuContainer>
        <StyledMenuList>
          {cartItems.map((cartItem)=>
            <li key={cartItem.id}>
              <CartItem cartItem={cartItem}/>
            </li>
          )}
        </StyledMenuList>
          <StyledLink to='/cart'>
            <StyledCartButton buttonType={BUTTON_TYPES.inverted}>
                Go to checkout
            </StyledCartButton>
          </StyledLink>
    </StyledMenuContainer>
  )
}

export default CartDropdown