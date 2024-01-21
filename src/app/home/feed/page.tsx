"use client";
import Feed from "@/components/Feed/Feed";
import postService from "@/services/postService";
import { useEffect, useState } from "react";
import { event } from "next/dist/build/output/log";
import { ICreateFeedDtoResponse, IFeedDtoResponse } from "@/types/feed.dto";
import TextBox from "@/components/TextBox/TextBox";
import Button from "@/components/Button/Button";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Storage from "@/services/storage";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 20px;
`;

const FeedHome = () => {
  const router = useRouter();
  const [feeds, setFeeds] = useState<IFeedDtoResponse[]>([]);
  const [message, setMessage] = useState("");
  const name = Storage.getItem("name") || "";
  const fetchFeeds = async () => {
    const res = await postService.getMyFeed();
    setFeeds(res);
  };
  useEffect(() => {
    fetchFeeds();
  }, []);

  const submit = () => {
    const res: Promise<ICreateFeedDtoResponse> = postService.createFeed({
      message: message,
    });
    fetchFeeds();
    setMessage("");
  };
  return (
    <>
      <StyledDiv>
        <TextBox
          placeholder={"Message"}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></TextBox>
        <Button variant={"primary"} onClick={submit}>
          Write
        </Button>
      </StyledDiv>

      {feeds.map((item) => (
        <Feed
          key={item._id}
          feed={item.message}
          url={
            "https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
          }
          name={"Generic Name"}
          postedAt={"10 minutes ago"}
        />
      ))}
    </>
  );
};
export default FeedHome;
