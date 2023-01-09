import { Card } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserDocumentFromAuth,
  userAuthWithEmailAndPasssword,
} from "../utils/firebase/firebaseUtils";
import StyledButton from "./basic/StyledButton";
import StyledFormInputField from "./basic/StyledFormInputField";


const StyledCard = styled(Card)({
    boxShadow: "none !important",
    padding: "20px",
})

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords mismatches");
    }

    try {
      const { user } = await userAuthWithEmailAndPasssword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      resetFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use)") {
        alert("This email already exists");
      }
      console.log("user creation failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <StyledCard>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <StyledFormInputField
          type="text"
          required
          placeholder="Name"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <StyledFormInputField
          type="email"
          required
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <StyledFormInputField
          type="password"
          required
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <StyledFormInputField
          type="password"
          required
          placeholder="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <StyledButton type="submit">Sign up</StyledButton>
      </form>
    </StyledCard>
  );
}

export default SignUpForm;
