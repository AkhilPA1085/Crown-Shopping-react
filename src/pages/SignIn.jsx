import { Container,Card, Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

import {signInWithGooglePopup,createUserDocumentFromAuth} from '../utils/firebase/firebaseUtils'

const StyledContainer = styled(Container)({
    padding: "100px 0px",
  });

function SignIn() {
    const loginWithGoogle = async()=>{
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user);
    }
  return (
    <>
        <StyledContainer>
            <Card>SignIn</Card>
            <Button onClick={loginWithGoogle}>SignIn with Google</Button>
        </StyledContainer>
    </>
  )
}

export default SignIn