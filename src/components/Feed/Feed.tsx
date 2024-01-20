"use client";
import { PropsWithChildren } from "react";
import Avatar from "@/components/Avatar/Avatar";
import Typography from "@/components/Typography/Typography";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 0px 1px 9px 3px #eeeeee;
  padding: 10px;
  border-radius: 10px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDiv2 = styled.div`
  padding-left: 20px;
  gap: 10px;
  flex-direction: column;
  display: flex;
`;
interface IFeedProps {
  url: string;
  name: string;
  feed: string;
  postedAt: string;
}
const Feed = (props: PropsWithChildren<IFeedProps>) => {
  return (
    <>
      <StyledContainer>
        <Avatar url={props.url} size={"small"} />
        <StyledDiv2>
          <StyledDiv>
            <Typography variant={"body"} color={"grey"}>
              {props.name}
            </Typography>
            <Typography variant={"small"} color={"lightgray"}>
              {props.postedAt}
            </Typography>
          </StyledDiv>
          <Typography variant={"small"} color={"lightgray"}>
            {props.feed}
          </Typography>
        </StyledDiv2>
      </StyledContainer>
    </>
  );
};
export default Feed;
