import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ListItemDom } from './ListItemDom';
import { removeChat } from './../../../store/chatReducer';

type Props = {
  item: any,
  removeChat: (id: string) => void
}

const ListItem = (props: Props) => {
  let date = new Date(props.item.date);
  const [showEditBlock, setShowEditBlock] = useState(false);
  
  const showEditBlockHandler = () => {
    setShowEditBlock(showEditBlock => !showEditBlock);
  }

  const removeChatHandler = (id: string) => {
    props.removeChat(id);
  }

  return (
    <ListItemDom {...props} date={date} removeChatHandler={removeChatHandler} showEditBlock={showEditBlock}
    showEditBlockHandler={showEditBlockHandler} />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, { removeChat })(ListItem)