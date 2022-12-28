import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button` 
    border:1px solid #0076D5;
    border-radius: 4px;
    padding:10px 15px;
    background-color: transparent;
    color: ${({theme})=>theme.colors.logo};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: ${({theme})=>theme.colors.logo};
        color:#fff;
        transition: all 0.5s;
    }

    @media(max-width:${({theme})=>theme.media.tab}) {
        padding:5px 8px;
    }

`

function StyledButton({value}) {
  return (
    <StyledBtn>{value}</StyledBtn>
  )
}

export default StyledButton