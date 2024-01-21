"use client";
import UserProfile from "@/components/UserProfile/UserProfile";
import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";
import MyFeeds from "@/widgets/MyFeeds/MyFeeds";
import Followers from "@/widgets/Followers/Followers";

const Profile = () => {
  //let selectedTab: string;
  const [selectedTab, setSelectedTab] = useState("post");
  const name = localStorage.getItem("name") || "";
  return (
    <>
      <UserProfile
        url={
          "https://t3.ftcdn.net/jpg/05/57/20/16/360_F_557201692_P86sh0v8g00VseZacjBOOKJmGLSvEpQb.jpg"
        }
        name={name}
        postNumber={200}
        followersNumber={200}
        followingNumber={200}
      />
      <Tabs
        tabs={[
          { label: "Post", value: "post" },
          { label: "Followers", value: "followers" },
          { label: "Following", value: "following" },
        ]}
        onTabClick={(tab) => {
          setSelectedTab(tab);
        }}
        selectedTab={selectedTab}
      />
      {selectedTab === "post" && <MyFeeds />}
      {selectedTab === "followers" && <Followers />}
      {selectedTab === "following" && <Followers />}
    </>
  );
};
export default Profile;
