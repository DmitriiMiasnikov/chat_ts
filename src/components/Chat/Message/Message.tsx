import React from 'react';
import { connect } from 'react-redux';
import { MessageDom } from './MessageDom';
import { deleteMessage } from './../../../store/messageReducer';

type Props = {
  message: {_id: string, chat_id: string, date: any, user_id: string, userName: string, text: string },
  deleteMessage: (id: string) => void
}

const Message = (props: Props) => {
  const date = new Date(props.message.date);
  
  const deleteMessageHandler = (id: string) => {
    props.deleteMessage(id);
  }

  return (
    <MessageDom {...props} deleteMessageHandler={deleteMessageHandler} date={date}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, { deleteMessage })(Message);