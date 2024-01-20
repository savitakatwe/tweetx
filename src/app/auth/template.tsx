"use client";
import { PropsWithChildren } from "react";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import imagePic from "../../../public/Log in.png";
import styled from "styled-components";

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledTitle = styled.div`
  padding: 20px 50px;
`;

function AuthTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <StyledTitle>
        <Typography variant={"title1"} color={"#ff748d"}>
          TweetX
        </Typography>
      </StyledTitle>
      <StyledFlexContainer>
        <div>{children}</div>
        <div>
          <Image src={imagePic} alt={"pic"} height={600} />
        </div>
      </StyledFlexContainer>
    </>
  );
}

export default AuthTemplate;
