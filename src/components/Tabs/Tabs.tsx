"use client";
import Typography from "@/components/Typography/Typography";

import styled from "styled-components";
import { PropsWithChildren } from "react";
import { string } from "prop-types";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  padding-left: 50px;
  padding-right: 50px;
`;
const StyledTab = styled.div<{
  isActive: boolean;
}>`
  padding-top: 20px;
  width: 100px;
  text-align: center;
  ${(props) =>
    props.isActive &&
    `
    border-top: 1px solid black;
    `}
`;
interface ITabsItems {
  label: string;
  value: string;
}
interface ITabsProps {
  tabs: ITabsItems[];
  selectedTab: string;
  onTabClick: (tab: string) => void;
}
const Tabs = (props: PropsWithChildren<ITabsProps>) => {
  return (
    <>
      <StyledContainer>
        {props.tabs.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              props.onTabClick(item.value);
            }}
          >
            <StyledTab isActive={props.selectedTab === item.value}>
              <Typography
                variant={"small"}
                color={props.selectedTab === item.value ? "black" : "lightgray"}
              >
                {item.label}
              </Typography>
            </StyledTab>
          </div>
        ))}
      </StyledContainer>
    </>
  );
};
export default Tabs;
