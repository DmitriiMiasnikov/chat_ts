import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FlexBlock } from "../FlexBlock";

const StyledWrapperHeader = styled.div`
  height: 60px;
  background-color: rgb(83, 83, 83);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: inherit;
  text-decoration: none;
  color: #c7c7c7;
  transition: 0.2s background-color;
  &:hover {
    background-color: rgba(0, 0, 0, 0.082);
  }
`;
const StyledItemRight = styled.div<{ account?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: inherit;
  transition: 0.2s background-color;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.082);
  }
  ${({ account }) =>
    account &&
    css`
      font-weight: bold;
      color: #d22c2c;
      font-size: 20px;
    `}
`;

type Props = {
  headerItems: { title: string; link: string }[];
  headerItemsRight: { title: string; name: string }[];
  authHandler: (name: string) => void;
  isAuth: boolean;
  currentUser: { email: string; userName: string; _id: string };
  openUserInfo: (user: any) => void;
};

export const HeaderDom = (props: Props) => {
  return (
    <StyledWrapperHeader>
      <FlexBlock>
        {props.headerItems.map(
          ({ title, link }: { title: string; link: string }, i: number) => {
            return (
              <StyledLink to={link} key={i}>
                {title}
              </StyledLink>
            );
          }
        )}
      </FlexBlock>
      <FlexBlock>
        {!props.isAuth ? (
          props.headerItemsRight.map((el: any, i: number) => {
            return (
              <StyledItemRight
                key={i}
                onClick={() => props.authHandler(el.name)}
              >
                {el.title}
              </StyledItemRight>
            );
          })
        ) : (
          <StyledItemRight
            account
            onClick={() => props.openUserInfo(props.currentUser)}
          >
            {props.currentUser && props.currentUser.userName}
          </StyledItemRight>
        )}
      </FlexBlock>
    </StyledWrapperHeader>
  );
};
