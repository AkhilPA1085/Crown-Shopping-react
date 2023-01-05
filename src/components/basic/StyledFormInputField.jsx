import React from 'react'
import styled from 'styled-components'


const FormInput = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme})=>theme.colors.text};
    padding: 15px 25px;
    margin-bottom: 20px;
    width: 100%;

    :focus{
        outline: none;
    }
`

function StyledFormInputField({...props}) {
  return (
    <>
        <FormInput {...props} />
    </>
  )
}

export default StyledFormInputField