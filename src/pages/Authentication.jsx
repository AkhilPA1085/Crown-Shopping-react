import { Container,Card, Button, Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import StyledButton,{BUTTON_TYPES} from '../components/basic/StyledButton';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const StyledContainer = styled(Container)({
    padding: "100px 0px",
    height:"100vh",
  });

function Authentication() {
    
  return (
    <>
        <StyledContainer>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <SignInForm/>
            </Grid>
            <Grid item xs={12} md={6}>
              <SignUpForm/>
            </Grid>
          </Grid>
        </StyledContainer>
    </>
  )
}

export default Authentication