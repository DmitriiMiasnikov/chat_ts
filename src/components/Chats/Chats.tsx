import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ChatsDom } from './ChatsDom';
import { createNewChat, getList, clearList } from './../../store/chatReducer';

type Props = {
  chats: any,
  currentUser: { email: string, userName: string, _id: string },
  createNewChat: (chatTitle: string, userId: string) => void,
  inputsCreateChat: { name: string, text: string }[],
  getList: (page: number) => void,
  clearList: () => void
}

const Chats = (props: Props) => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      await props.getList(1);
      setFetching(false);
    }
    fetchData()
  }, [])

  useEffect(() => {
    return () => props.clearList()
  }, [])

  const createNewChatHandler = (data: any) => {
    setFetching(true);
    const fetchData = async () => {
      await props.createNewChat(data.chatTitle, props.currentUser['_id']);
      props.clearList();
      props.getList(1);
      setFetching(false);
    }
    fetchData()
  }

  return (
    <ChatsDom {...props} createNewChatHandler={createNewChatHandler} fetching={fetching} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    chats: state.chat.chats,
    currentUser: state.auth.currentUser,
    inputsCreateChat: state.chat.inputsCreateChat
  }
}
export default connect(mapStatesToProps, { createNewChat, getList, clearList })(Chats)