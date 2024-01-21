"use client";
import Feed from "@/components/Feed/Feed";
import postService from "@/services/postService";
import { useEffect, useState } from "react";
import { IFeedDtoResponse } from "@/types/feed.dto";

const MyFeeds = () => {
  const [feeds, setFeeds] = useState<IFeedDtoResponse[]>([]);
  const fetchFeeds = async () => {
    const res = await postService.getMyFeed();
    setFeeds(res);
  };
  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <>
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
export default MyFeeds;
