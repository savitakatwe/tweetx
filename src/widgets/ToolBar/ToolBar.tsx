"use client";
import Typography from "@/components/Typography/Typography";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  align-items: center;
  box-shadow: 0px -4px 12px 4px lightgray;
`;
const StyledChildContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
  gap: 40px;
`;
const ToolBar = () => {
  return (
    <>
      <StyledContainer>
        <div>
          <Typography variant={"title1"} color={"#ff748d"}>
            TweetX
          </Typography>
        </div>
        <StyledChildContainer>
          <Typography variant={"body"} color={"lightgray"}>
            Feed
          </Typography>
          <Typography variant={"body"} color={"lightgray"}>
            Users
          </Typography>
          <Typography variant={"body"} color={"lightgray"}>
            Profile
          </Typography>
        </StyledChildContainer>
      </StyledContainer>
    </>
  );
};
export default ToolBar;
