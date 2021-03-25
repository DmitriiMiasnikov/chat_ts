import React from "react";
import Message from "./Message/Message";
import CreateMessage from "./CreateMessage/CreateMessage";
import { Fetching } from "./../Fetching";
import styled from "styled-components";

const StyledChatWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`;
const StyledMessages = styled.div`
  padding: 10px;
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #1d1d1d;
  }
`;

type Props = {
  messages: any;
  currentUser: { email: string; userName: string; _id: string };
  refEndList: any;
  refMessages: any;
  fetching: boolean;
  setFetching: (fetching: boolean) => void;
  chatId: string;
  scrollToBottom: () => void;
};

export const ChatDom = (props: Props) => {
  return (
    <StyledChatWrapper>
      <StyledMessages ref={props.refMessages}>
        {props.fetching && (
          <Fetching
            blockWidth={"100%"}
            blockHeight={"40px"}
            imageSize={"35px"}
          />
        )}
        {props.messages.map((el: any, i: number) => {
          return <Message message={el} key={i} />;
        })}
        <div ref={props.refEndList} />
      </StyledMessages>
      {props.currentUser && (
        <CreateMessage
          setFetching={props.setFetching}
          chatId={props.chatId}
          scrollToBottom={props.scrollToBottom}
        />
      )}
    </StyledChatWrapper>
  );
};
