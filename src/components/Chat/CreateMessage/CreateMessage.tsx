import React from 'react';
import { connect } from 'react-redux';
import { CreateMessageDom } from './CreateMessageDom';
import { createMessage } from './../../../store/messageReducer';

type Props = {
  createMessage: (message: string, userId: string, chatId: string) => void,
  currentUser: { email: string, userName: string, _id: string },
  setFetching: (fetching: boolean) => void,
  chatId: string,
  scrollToBottom: () => void
}

const CreateMessage = (props: Props) => {

  const newMessageHandler = (data: any) => {
    props.setFetching(true);
    const fetchData = async () => {
      await props.createMessage(data.message, props.currentUser['_id'], props.chatId);
      props.scrollToBottom();
      props.setFetching(false);
    }
    fetchData()
  }

  return (
    <CreateMessageDom {...props} newMessageHandler={newMessageHandler} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(mapStatesToProps, { createMessage })(CreateMessage)