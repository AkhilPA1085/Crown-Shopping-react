import { Card } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import {
    signInWithGooglePopup,createUserDocumentFromAuth, userSignInWithEmailAndPassword
} from "../utils/firebase/firebaseUtils";
import StyledButton,{BUTTON_TYPES} from "./basic/StyledButton";
import StyledFormInputField from "./basic/StyledFormInputField";


const StyledCard = styled(Card)({
    boxShadow: "none !important",
    padding: "20px",
})

const StyledDiv = styled.div` 
    display: flex;
    justify-content: space-between;
`


const defaultFormFields = {
    email: "",
    password: "",
}

function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields


    const resetFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const {user} = await userSignInWithEmailAndPassword(email,password);
            resetFields();
        }catch(error){
            if(error.code){
                alert(error.code)
            }
            console.log('signIn error',error)
        }
        
    }

    const loginWithGoogle = async()=>{
        const {user} = await signInWithGooglePopup()
    }

  return (
    <StyledCard>
      <h1>Sign In with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <StyledFormInputField
          type="email"
          required
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <StyledFormInputField
          type="password"
          required
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <StyledDiv>
            <StyledButton type="submit">Sign In</StyledButton>
            <StyledButton type="button" buttonType={BUTTON_TYPES.google}  onClick={loginWithGoogle}>SignIn with Google</StyledButton>
        </StyledDiv>
      </form>
    </StyledCard>
  );
}

export default SignInForm;
