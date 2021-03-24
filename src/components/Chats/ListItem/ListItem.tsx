import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ListItemDom } from './ListItemDom';

type Props = {
  item: any,
  isAuth: boolean,
  currentUser: any
}

const ListItem = (props: Props) => {
  let date = new Date(props.item.date);
  const [showEditBlock, setShowEditBlock] = useState(false);
  const isMyChat = (props.currentUser && props.currentUser._id === props.item.userId) || false;
  const showEditBlockHandler = (show: boolean) => {
    setShowEditBlock(show);
  }

  return (
    <ListItemDom {...props} date={date} showEditBlock={showEditBlock}
    showEditBlockHandler={showEditBlockHandler} setShowEditBlock={setShowEditBlock}
    isMyChat={isMyChat} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStatesToProps, {})(ListItem)