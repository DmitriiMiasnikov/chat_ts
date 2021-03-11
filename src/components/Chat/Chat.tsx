import React from 'react';
import { connect } from 'react-redux';
import { ChatDom } from './ChatDom';
import { withRouter } from 'react-router-dom';

type Props = {
  match: any
}

const Chat = (props: Props) => {
  return (
    <ChatDom {...props} />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default withRouter(connect(mapStatesToProps, {})(Chat))