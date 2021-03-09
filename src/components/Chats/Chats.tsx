import React from 'react';
import { connect } from 'react-redux';
import { ChatsDom } from './ChatsDom';
import { createNewChat } from './../../store/chatReducer';

type Props = {
  chats: any,
  currentUser: { email: string, userName: string, _id: string },
  createNewChat: (chatTitle: string, userId: string) => void,
  inputsCreateChat: { name: string, text: string }[],
}

const Chats = (props: Props) => {

  const createNewChatHandler = (data: any) => {
    props.createNewChat(data.name, props.currentUser['_id']);
  }

  return (
    <ChatsDom {...props} createNewChatHandler={createNewChatHandler}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    chats: state.chat.chats,
    currentUser: state.auth.currentUser,
    inputsCreateChat: state.chat.inputsCreateChat
  }
}
export default connect(mapStatesToProps, { createNewChat })(Chats)