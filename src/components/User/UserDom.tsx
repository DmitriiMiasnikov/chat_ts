import styled from "styled-components";
import { Fetching } from "./../Fetching";
import avatarSvg from "./../../assets/images/avatar.svg";
import { FlexBlock } from "../FlexBlock";
import { List } from "../List";

const StyledWrapper = styled.div`
  padding: 10px;
`;
const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #c7c7c7;
  border-radius: 8px;
  padding: 10px;
`;
const StyledAvatar = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 15px;
`;
const StyledLineInfo = styled.div<{ fontSize?: string; margin?: string }>`
  color: #c7c7c7;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  margin: ${({ margin }) => margin || "0"};
`;

const StyledListChats = styled.div`
  color: #c7c7c7;
`;
const StyledTitleList = styled.div`
  font-size: 26px;
`;
const StyledItemList = styled.div``;

type Props = {
  user: { email: string; _id: string; userName: string };
  userChats: { date: string; title: string; user_id: string; _id: string }[];
  userMessages: {
    _id: string;
    text: string;
    user_id: string;
    chat_id: string;
    userName: string;
    date: string;
  }[];
  fetching: boolean;
};

export const UserDom = (props: Props) => {
  return (
    <StyledWrapper>
      {props.fetching && (
        <Fetching blockWidth={"100%"} blockHeight={"60px"} imageSize={"35px"} />
      )}
      {!props.fetching && props.user && (
        <>
          <StyledUserInfo>
            <StyledAvatar src={avatarSvg} />
            <FlexBlock
              direction={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <StyledLineInfo fontSize={"32px"} margin={"0 0 0 10px"}>
                {props.user.userName}
              </StyledLineInfo>
              <StyledLineInfo>{props.user.email}</StyledLineInfo>
              <StyledLineInfo margin={"15px 0 0 0"}>
                Чатов создано: {props.userChats.length}
              </StyledLineInfo>
              <StyledLineInfo>
                Сообщений написано: {props.userMessages.length}
              </StyledLineInfo>
            </FlexBlock>
          </StyledUserInfo>
          <StyledListChats>
            <StyledTitleList>Список чатов</StyledTitleList>
            <List listDirection={"column"}>
              {props.userChats.map((el: any, i: number) => {
                return <StyledItemList key={i}>{el.title}</StyledItemList>;
              })}
            </List>
          </StyledListChats>
        </>
      )}
    </StyledWrapper>
  );
};
