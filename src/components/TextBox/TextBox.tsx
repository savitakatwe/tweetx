"use client";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

const StyledTextBox = styled.input`
  background-color: #f9f9f9;
  border: none;
  border-radius: 5px;
  padding: 20px 10px;
  font-size: 14px;
  width: 100%;
`;

const TextBox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledTextBox {...props} />;
};
export default TextBox;
