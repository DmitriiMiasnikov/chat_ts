import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ChatDom } from './ChatDom';
import { withRouter } from 'react-router-dom';
import { createMessage } from './../../store/messageReducer';

type Props = {
  match: any,
  currentUser: { email: string, userName: string, _id: string },
  createMessage: (message: string, userId: string, chatId: string) => void
}

const Chat = (props: Props) => {
  const [fetching, setFetching] = useState(false);
  const newMessageHandler = (data: any) => {
    setFetching(true);
    const fetchData = async () => {
      await props.createMessage(data.message, props.currentUser['_id'] || 'Anonim', props.match.params.chatId);
      // await props.clearList()
      // await props.getList(1);
      setFetching(false);
    }
    fetchData()
  }
  return (
    <ChatDom {...props} newMessageHandler={newMessageHandler}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default withRouter(connect(mapStatesToProps, { createMessage })(Chat))