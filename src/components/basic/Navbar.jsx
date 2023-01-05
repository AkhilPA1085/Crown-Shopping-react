import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

const StyledMainHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    .links{
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
    }

    @media (max-width:${({theme})=>theme.media.tab}){
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      background: #fff;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      height: 100vh;
      padding-top: 100px;
      display: none;
      transform: translateX(100%);
      transition: all 2s;
      z-index: 999;

      &.active{
        transform: translateX(0%);
        display: inline-flex;

        .links{
          font-size: 18px;
          font-weight: 700;
        }
      }
      
    }
    
`

const StyledMobileButtons = styled.div`
  display: none;

  @media(max-width:${({theme})=>theme.media.tab}) {
    display: inline-block;
    position: absolute;
    right: 10px;
    left: auto;
    z-index: 999;

    [name='hamburger-icon']{
      display: block;
      z-index: 999;
      font-size: 34px;
      font-weight: 700;
      color: ${({theme})=>theme.colors.text};
    }
    
  }
`


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <StyledMainHeader className={openMenu ? 'active': ''}>
          <NavLink to="/shop" className="links" onClick={()=>setOpenMenu(!openMenu)}>Shop</NavLink>
          <NavLink to="/contact" className="links" onClick={()=>setOpenMenu(!openMenu)}>contact</NavLink>
          <NavLink to="/cart" className="links" onClick={()=>setOpenMenu(!openMenu)}>cart</NavLink>
          <NavLink to="/sign-in" className="links" onClick={()=>setOpenMenu(!openMenu)}>signin</NavLink>
      </StyledMainHeader>

      <StyledMobileButtons>
        <MenuIcon name='hamburger-icon' className='hamburger-icon' onClick={()=>setOpenMenu(!openMenu)}/>
      </StyledMobileButtons>
    </>
  )
}

export default Navbar