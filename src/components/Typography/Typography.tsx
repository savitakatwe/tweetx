"use client";

import { ParamHTMLAttributes, PropsWithChildren, useMemo } from "react";
import styled from "styled-components";

const StyledTypography = styled.p<{
  size: string;
  color: string;
}>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
interface ITypographyProps extends ParamHTMLAttributes<HTMLParagraphElement> {
  variant: "title1" | "title2" | "body" | "small";
  color: string;
}
const Typography = ({
  variant,
  children,
  color,
  ...otherProps
}: PropsWithChildren<ITypographyProps>) => {
  const typo = useMemo(() => {
    switch (variant) {
      case "title1":
        return { size: "20px" };
      case "title2":
        return { size: "18px" };
      case "body":
        return { size: "14px" };
      case "small":
        return { size: "12px" };
    }
  }, [variant]);

  return (
    <StyledTypography size={typo.size} color={color} {...otherProps}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
