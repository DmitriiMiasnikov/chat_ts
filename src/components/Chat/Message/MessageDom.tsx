import avatarSvg from "./../../../assets/images/avatar.svg";
import deleteSvg from "./../../../assets/images/delete.svg";
import styled from "styled-components";
import { CloudMessage } from "../../CloudMessage";

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:not(:first-child) {
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid #333333;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: calc(100% - 90px);
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
  .userName {
    font-size: 14px;
    color: #c7c7c7;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5px;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #c7c7c7;
  div {
    text-align: end;
    &:not(:first-child) {
      margin-top: 3px;
    }
  }
`;
const ButtonDeleteMessage = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 15px;
  }
`;

type Props = {
  message: {
    _id: string;
    chat_id: string;
    date: any;
    user_id: string;
    userName: string;
    text: string;
  };
  date: Date;
  deleteMessageHandler: (id: string) => void;
};

export const MessageDom = (props: Props) => {
  return (
    <MessageWrapper>
      <LeftSide>
        <User>
          <img src={avatarSvg} alt="" />
          <div className={"userName"}>{props.message.userName}</div>
        </User>
        <CloudMessage text={props.message.text} />
      </LeftSide>
      <RightSide>
        <Date>
          <div>{props.date.toLocaleDateString()}</div>
          <div>{props.date.toLocaleTimeString()}</div>
        </Date>
        <ButtonDeleteMessage>
          <img
            src={deleteSvg}
            alt=""
            onClick={() => props.deleteMessageHandler(props.message._id)}
          />
        </ButtonDeleteMessage>
      </RightSide>
    </MessageWrapper>
  );
};
