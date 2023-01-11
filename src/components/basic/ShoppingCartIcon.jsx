import { Mail, ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { Box } from "@mui/system"
import { useContext, useState } from "react"
import styled from "styled-components"
import { cartContext } from "../../contexts/CartContext"
import CartDropdown from "../CartDropdown"


const StyledBox = styled.div` 

`


function ShoppingCartIcon() {
    const {isCartOpen,setIsCartOpen,cartItems,cartCounts} = useContext(cartContext);
    const handleToggler = () =>{
        setIsCartOpen(!isCartOpen)
    }

    const cartTotalItems = cartItems.length;
  return (
    <>
        <Box onClick={handleToggler}>
            <Badge badgeContent={cartTotalItems} color="primary">
                <ShoppingCart color="action"/>
            </Badge>
        </Box>
    </>
  )
}

export default ShoppingCartIcon