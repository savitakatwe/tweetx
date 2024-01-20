"use client";
import Avatar from "@/components/Avatar/Avatar";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";
import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-left: 20px;
`;
interface IUserRowProps {
  name: string;
  url: string;
  followingNumber: number;
  isFollowing: string;
}
const UserRow = (props: PropsWithChildren<IUserRowProps>) => {
  return (
    <>
      <StyledContainer>
        <Avatar size={"small"} url={props.url} />
        <StyledDiv>
          <Typography variant={"body"} color={"grey"}>
            {props.name}
          </Typography>
          <Typography variant={"small"} color={"lightgray"}>
            Following : {props.followingNumber}
          </Typography>
        </StyledDiv>
        <div>
          <Button variant={"primary"}>{props.isFollowing}</Button>
        </div>
      </StyledContainer>
    </>
  );
};
export default UserRow;
