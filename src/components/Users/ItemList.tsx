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
};

const ItemList = (props: Props) => {
  return (
    <StyledItemList to={`user/${props.user.id}`}>
      <StyledUserName>{props.user.userName}</StyledUserName>
      <StyledUserInfo>
        <div>{props.user.chatsCount} чата(ов)</div>
        <div>{props.user.messagesCount} сообщения(й)</div>
      </StyledUserInfo>
    </StyledItemList>
  );
};

const mapStatesToProps = (state: any) => {
  return {};
};

export default connect(mapStatesToProps, {})(ItemList);
