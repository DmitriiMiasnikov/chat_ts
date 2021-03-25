import { connect } from "react-redux";
import styled from "styled-components";

const StyledItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background-color: #464646;
  transition: 0.2s background-color;
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
    <StyledItemList>
      <StyledUserName>{props.user.userName}</StyledUserName>
      <StyledUserInfo>
        <div>чатов</div>
        <div>сообщений</div>
      </StyledUserInfo>
    </StyledItemList>
  );
};

const mapStatesToProps = (state: any) => {
  return {};
};

export default connect(mapStatesToProps, {})(ItemList);
