"use client";
import styled from "styled-components";
import { PropsWithChildren, useMemo } from "react";
import Image from "next/image";

const StyledAvatar = styled(Image)<{
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
        return { width: "50", height: "50" };
      case "large":
        return { width: "100", height: "100" };
    }
  }, [size]);

  return (
    <StyledAvatar
      src={url}
      alt={url}
      width={avatarSize.width}
      height={avatarSize.height}
    />
  );
};
export default Avatar;
