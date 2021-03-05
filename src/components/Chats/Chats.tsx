import React from 'react';
import { connect } from 'react-redux';
import { ChatsDom } from './ChatsDom';

type Props = {
  chats: any
}

const Chats = (props: Props) => {
  return (
    <ChatsDom {...props} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    chats: state.chat.chats
  }
}
export default connect(mapStatesToProps, {})(Chats)