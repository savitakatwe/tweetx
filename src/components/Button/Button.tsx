"use client";
import React, { PropsWithChildren, useMemo } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{
  color: string;
  textColor: string;
  border: string;
}>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  padding: 10px 20px;
  border-radius: 5px;
  border: ${(props) => props.border};
`;

interface IButtonProps {
  variant: "primary" | "secondary" | "transparent";
}
const Button = ({ variant, children }: PropsWithChildren<IButtonProps>) => {
  const buttonColor = useMemo(() => {
    switch (variant) {
      case "primary":
        return { color: "#ff748d", textColor: "white", border: "none" };
      case "secondary":
        return { color: "white", textColor: "black", border: "1px solid" };
      case "transparent":
        return { color: "white", textColor: "black", border: "none" };
    }
  }, [variant]);

  return (
    <StyledButton
      color={buttonColor.color}
      textColor={buttonColor.textColor}
      border={buttonColor.border}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
