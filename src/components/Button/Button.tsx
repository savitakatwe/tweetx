"use client";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blueviolet;
  color: white;
`;
const Button = () => {
  return <StyledButton>Click me</StyledButton>;
};
export default Button;
