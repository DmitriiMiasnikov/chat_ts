import React from "react";
import { List } from "../List";
import { Fetching } from "./../Fetching";
import styled from "styled-components";

const StyledItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background-color: #464646;
  transition: .2s background-color;
  &:first-child {
    margin-top: 5px;
  }
  &:not(:first-child) {
    margin-top: 2px;
  }
  &:hover {
    cursor: pointer;
    background-color: #585858;
  }
`;
const StyledUserName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #c7c7c7;
`;
const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  margin-right: 10px;
  color: #c7c7c7;
  > div {
    text-align: end;
  }
`
type Props = {
  users: any;
  fetching: boolean;
};

export const UsersDom = (props: Props) => {
  return (
    <div>
      {props.fetching && (
        <Fetching blockWidth={"100%"} blockHeight={"60px"} imageSize={"35px"} />
      )}
      <List listDirection={"column"}>
        {Boolean(props.users.length) &&
          props.users.map((el: any, i: number) => {
            return (
              <StyledItemList key={i}>
                <StyledUserName>{el.userName}</StyledUserName>
                <StyledUserInfo>
                  <div>чатов</div>
                  <div>сообщений</div>
                </StyledUserInfo>
              </StyledItemList>
            );
          })}
      </List>
    </div>
  );
};
