import { Container, Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './basic/Navbar'

const StyledMainHeader = styled.header`
    padding: 1.6rem 0;
    background-color: #fff;
    color: ${({theme})=>theme.colors.text};
    box-shadow: 1px  1px 1px lightgray;

    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
        color: ${({theme})=>theme.colors.logo};
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 700;
        font-size: 1.6rem;
    }
`


const Header = () => {
  return (
    <StyledMainHeader>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <NavLink to= "/" className="logo">
              Crown Shop
          </NavLink>
          </Grid>
          <Grid item md={6}>
            <Navbar/>
          </Grid>
        </Grid>
      </Container>
    </StyledMainHeader>
  )
}

export default Header