import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { ChatDom } from './ChatDom';
import { withRouter } from 'react-router-dom';
import { createMessage, getMessages, clearListMessages, deleteMessage, setPageMessages } from './../../store/messageReducer';

type Props = {
  match: any,
  currentUser: { email: string, userName: string, _id: string },
  createMessage: (message: string, userId: string, chatId: string) => void,
  getMessages: (page: number, chatId: string) => void,
  pageMessages: number,
  messages: any,
  clearListMessages: () => void,
  deleteMessage: (id: string) => void,
  setPageMessages: (page: number) => void
}

const Chat = (props: Props) => {
  const [getMessages, pageMessages, match, clearListMessages, deleteMessage, messages, setPageMessages] =
    [props.getMessages, props.pageMessages, props.match, props.clearListMessages, props.deleteMessage, props.messages,
    props.setPageMessages]
  const [fetching, setFetching] = useState(false);
  const [allMessagesLoaded, setAllMessagesLoaded] = useState(true);
  const [scrollMessages, setScrollMessages] = useState(null);

  const refEndList: any = useRef(null);
  const refMessages: any = useRef(null);

  const scrollToBottom = () => {
    refEndList.current?.scrollIntoView({ behavior: 'auto' });
  }

  const scrollHandler = () => {
    setScrollMessages(refMessages.current?.scrollTop)
  }

  const subscribeScroll = () => window.addEventListener('scroll', scrollHandler, true);
  const unsubscribeScroll = () => window.removeEventListener('scroll', scrollHandler, true);

  useEffect(() => {
    subscribeScroll()
    return () => unsubscribeScroll()
  })

  useEffect(() => {
    if (pageMessages === 1) {
      scrollToBottom()
    }
    if (messages.length % 30 !== 0) {
      setAllMessagesLoaded(true);
    } else {
      setAllMessagesLoaded(false);
    }
  }, [messages])
  
  useEffect(() => {
    if (scrollMessages === 0 && !allMessagesLoaded) {
      setPageMessages(pageMessages + 1);
    }
  }, [scrollMessages])

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      await getMessages(pageMessages, match.params.chatId);
      setFetching(false);
    }
    fetchData()
  }, [getMessages, pageMessages, match.params.chatId])

  useEffect(() => {
    return () => clearListMessages()
  }, [clearListMessages])

  const newMessageHandler = (data: any) => {
    setFetching(true);
    const fetchData = async () => {
      await props.createMessage(data.message, props.currentUser['_id'], props.match.params.chatId);
      scrollToBottom();
      setFetching(false);
    }
    fetchData()
  }

  const deleteMEssageHandler = (id: string) => {
    deleteMessage(id);
  }
  
  return (
    <ChatDom {...props} newMessageHandler={newMessageHandler} deleteMEssageHandler={deleteMEssageHandler}
    refEndList={refEndList} refMessages={refMessages} fetching={fetching}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser,
    pageMessages: state.message.pageMessages,
    messages: state.message.messages
  }
}

export default withRouter(connect(mapStatesToProps, { createMessage, getMessages, clearListMessages, 
  deleteMessage, setPageMessages })(Chat))