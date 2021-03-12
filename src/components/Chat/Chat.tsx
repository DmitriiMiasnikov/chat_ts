import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ChatDom } from './ChatDom';
import { withRouter } from 'react-router-dom';
import { createMessage, getMessages, clearListMessages } from './../../store/messageReducer';

type Props = {
  match: any,
  currentUser: { email: string, userName: string, _id: string },
  createMessage: (message: string, userId: string, chatId: string) => void,
  getMessages: (page: number, chatId: string) => void,
  pageMessages: number,
  messages: any,
  clearListMessages: () => void
}

const Chat = (props: Props) => {
  const [fetching, setFetching] = useState(false);

  const newMessageHandler = (data: any) => {
    setFetching(true);
    const fetchData = async () => {
      await props.createMessage(data.message, props.currentUser ? props.currentUser['_id'] : 'anonim', props.match.params.chatId);
      setFetching(false);
    }
    fetchData()
  }

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      await props.getMessages(props.pageMessages, props.match.params.chatId);
      setFetching(false);
    }
    fetchData()
  }, [props.getMessages, props.pageMessages, props.match.params.chatId])

  useEffect(() => {
    return () => props.clearListMessages()
  }, [])

  return (
    <ChatDom {...props} newMessageHandler={newMessageHandler}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser,
    pageMessages: state.message.pageMessages,
    messages: state.message.messages
  }
}

export default withRouter(connect(mapStatesToProps, { createMessage, getMessages, clearListMessages })(Chat))