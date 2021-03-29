import styled from 'styled-components';

const StyledWrapper = styled.div`
`

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
}

export const UserDom = (props: Props) => {
  
  return (
    <StyledWrapper>
        {props.user && props.user.userName}
    </StyledWrapper>
  )
}