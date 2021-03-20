import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { ChatDom } from './ChatDom';
import { withRouter } from 'react-router-dom';
import { createMessage, getMessages, clearListMessages, setPageMessages } from './../../store/messageReducer';

type Props = {
  match: any,
  currentUser: { email: string, userName: string, _id: string },
  createMessage: (message: string, userId: string, chatId: string) => void,
  getMessages: (page: number, chatId: string) => void,
  pageMessages: number,
  messages: any,
  clearListMessages: () => void,
  setPageMessages: (page: number) => void
}

const Chat = (props: Props) => {
  const [getMessages, pageMessages, match, clearListMessages, messages, setPageMessages] =
    [props.getMessages, props.pageMessages, props.match, props.clearListMessages, props.messages,
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
  }, [messages, pageMessages])

  useEffect(() => {
    if (scrollMessages === 0 && !allMessagesLoaded && !fetching) {
      setPageMessages(pageMessages + 1);
    }
  }, [scrollMessages, allMessagesLoaded, pageMessages, fetching, setPageMessages])

  useEffect(() => {
    setFetching(true);
    const fetchData = async () => {
      if (pageMessages !== 1) {
        await new Promise(res => setTimeout(res, 500));
      }
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


  return (
    <ChatDom {...props} newMessageHandler={newMessageHandler}
      refEndList={refEndList} refMessages={refMessages} fetching={fetching} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser,
    pageMessages: state.message.pageMessages,
    messages: state.message.messages
  }
}

export default withRouter(connect(mapStatesToProps, { createMessage, getMessages, clearListMessages, setPageMessages })(Chat))