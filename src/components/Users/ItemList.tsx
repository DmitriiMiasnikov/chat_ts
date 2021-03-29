import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const StyledItemList = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  padding: 5px 0;
  background-color: #464646;
  transition: 0.2s background-color;
  text-decoration: none;
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
`;

type Props = {
  user: any;
  currentUser: any
};

const ItemList = (props: Props) => {
  const [user, currentUser] = [props.user, props.currentUser];
  let countChatsText, countMessagesText;
  if (['2', '3', '4'].includes(user.chatsCount.toString().slice(-1))) {
    countChatsText = 'чата'
  } else if (user.chatsCount.toString().slice(-1) === '1') {
    countChatsText = 'чат'
  } else countChatsText = 'чатов'
  if (['2', '3', '4'].includes(user.messagesCount.toString().slice(-1))) {
    countMessagesText = 'сообщения'
  } else if (user.chatsCount.toString().slice(-1) === '1') {
    countMessagesText = 'сообщение'
  } else countMessagesText = 'сообщений'

  return (
    <StyledItemList to={`user/${user.id}`}>
      <StyledUserName>{user.userName} {currentUser && currentUser._id === user.id && '(я)'}</StyledUserName>
      <StyledUserInfo>
        <div>{user.chatsCount} {countChatsText}</div>
        <div>{user.messagesCount} {countMessagesText}</div>
      </StyledUserInfo>
    </StyledItemList>
  );
};

const mapStatesToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStatesToProps, {})(ItemList);
