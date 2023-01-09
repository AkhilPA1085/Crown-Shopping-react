import { Mail, ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { Box } from "@mui/system"
import { useContext, useState } from "react"
import styled from "styled-components"
import { cartContext } from "../../contexts/CartContext"
import CartDropdown from "./CartDropdown"


const StyledBox = styled.div` 

`


function ShoppingCartIcon() {
    const {isCartOpen,setIsCartOpen} = useContext(cartContext);
    const handleToggler = () =>{
        setIsCartOpen(!isCartOpen)
    }
  return (
    <>
        <StyledBox onClick={handleToggler}>
            <Badge badgeContent={4} color="primary">
                <ShoppingCart color="action"/>
            </Badge>
        </StyledBox>
    </>
  )
}

export default ShoppingCartIcon