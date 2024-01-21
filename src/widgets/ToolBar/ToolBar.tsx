"use client";
import Typography from "@/components/Typography/Typography";
import styled from "styled-components";
import { string } from "prop-types";
import { PropsWithChildren, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);
  const toolbarArray = [
    { label: "Feed", value: "/home/feed" },
    { label: "User", value: "/home/user" },
    { label: "Profile", value: "/home/profile" },
  ];

  return (
    <>
      <StyledContainer>
        <div>
          <Typography variant={"title1"} color={"#ff748d"}>
            TweetX
          </Typography>
        </div>
        <StyledChildContainer>
          {toolbarArray.map((item) => (
            <Typography
              onClick={() => router.push(item.value)}
              key={item.value}
              variant={"body"}
              color={item.value === pathname ? "#ff748d" : "lightgray"}
            >
              {item.label}
            </Typography>
          ))}
        </StyledChildContainer>
      </StyledContainer>
    </>
  );
};
export default ToolBar;
