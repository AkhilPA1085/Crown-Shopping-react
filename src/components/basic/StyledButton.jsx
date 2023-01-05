import React, { Children } from 'react'
import styled from 'styled-components'

const StyledBaseButton = styled.button` 
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

const StyledInvertedButton = styled(StyledBaseButton)` 
  background-color: ${({theme})=>theme.colors.logo};
  color:#fff;
  width: 50%;
  margin: 0 !important;

  &:hover{
    background-color: transparent;
    color: ${({theme})=>theme.colors.logo};
  }
`

const StyledGoogleButton = styled(StyledBaseButton)` 
  background-color: ${({theme})=>theme.colors.logo};
  color:#fff;
  width: 50%;
  margin: 0 !important;
`

export const BUTTON_TYPES = {
  base:'base',
  inverted: 'inverted',
  google: 'google',
}

const getButton = (buttonType = BUTTON_TYPES.base) =>(
  {
    [BUTTON_TYPES.base]:StyledBaseButton,
    [BUTTON_TYPES.inverted]:StyledInvertedButton,
    [BUTTON_TYPES.google]:StyledGoogleButton,
  }[buttonType]
)

function StyledButton({buttonType,children,...props}) {
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton {...props}>{children}</CustomButton>
  )
}

export default StyledButton