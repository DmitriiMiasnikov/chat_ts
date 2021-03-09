import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ChatsDom } from './ChatsDom';
import { createNewChat, getList } from './../../store/chatReducer';

type Props = {
  chats: any,
  currentUser: { email: string, userName: string, _id: string },
  createNewChat: (chatTitle: string, userId: string) => void,
  inputsCreateChat: { name: string, text: string }[],
  getList: (page: number) => void
}

const Chats = (props: Props) => {

  useEffect(() => {

    const fetchData = async () => {
      await props.getList(1)
    }
    fetchData()
  }, [])

  const createNewChatHandler = (data: any) => {
    props.createNewChat(data.chatTitle, props.currentUser['_id']);
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
export default connect(mapStatesToProps, { createNewChat, getList })(Chats)