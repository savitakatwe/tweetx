"use client";
import styled from "styled-components";
import { PropsWithChildren, useMemo } from "react";

const StyledAvatar = styled.img<{
  width: string;
  height: string;
}>`
  border: 1px solid #bbbbbb;
  background-color: white;
  border-radius: 50%;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
interface IAvatarProps {
  url: string;
  size: "small" | "large";
}

const Avatar = ({ url, size }: PropsWithChildren<IAvatarProps>) => {
  const avatarSize = useMemo(() => {
    switch (size) {
      case "small":
        return { width: "50px", height: "50px" };
      case "large":
        return { width: "100px", height: "100px" };
    }
  }, [size]);

  return <StyledAvatar width={avatarSize.width} height={avatarSize.height} />;
};
export default Avatar;
