"use client";
import { PropsWithChildren } from "react";
import ToolBar from "@/widgets/ToolBar/ToolBar";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 500px;
  margin: auto;
`;
const HomeTemplate = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ToolBar />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};
export default HomeTemplate;
