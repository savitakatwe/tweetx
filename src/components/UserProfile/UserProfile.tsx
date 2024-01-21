"use client";
import Avatar from "@/components/Avatar/Avatar";
import { PropsWithChildren } from "react";
import Typography from "@/components/Typography/Typography";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledDiv = styled.div`
  padding-left: 50px;
`;
const StyledInnerDiv = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;
interface IUserProfileProps {
  url: string;
  name: string;
  postNumber: number;
  followersNumber: number;
  followingNumber: number;
}
const UserProfile = (props: PropsWithChildren<IUserProfileProps>) => {
  return (
    <>
      <StyledContainer>
        <Avatar url={props.url} size={"large"} />
        <StyledDiv>
          <Typography variant={"title2"} color={"grey"}>
            {props.name}
          </Typography>
          <StyledInnerDiv>
            <Typography variant={"small"} color={"lightgray"}>
              Posts: {props.postNumber}
            </Typography>
            <Typography variant={"small"} color={"lightgray"}>
              Followers: {props.followersNumber}
            </Typography>
            <Typography variant={"small"} color={"lightgray"}>
              Following: {props.followingNumber}
            </Typography>
          </StyledInnerDiv>
        </StyledDiv>
      </StyledContainer>
    </>
  );
};
export default UserProfile;
