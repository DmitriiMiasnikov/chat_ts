import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ListItemDom } from './ListItemDom';
import { removeChat, renameChat } from './../../../store/chatReducer';

type Props = {
  item: any,
  removeChat: (id: string) => void,
  renameChat: (id: string, title: string) => void
}

const ListItem = (props: Props) => {
  let date = new Date(props.item.date);
  const [showEditBlock, setShowEditBlock] = useState(false);
  const inputsRenameChat = [{name: 'chatTitle', text: 'Введите новое название'}]
  const showEditBlockHandler = (show: boolean) => {
    setShowEditBlock(show);
  }

  const removeChatHandler = (id: string) => {
    props.removeChat(id);
    setShowEditBlock(false);
  }
  const renameChatHandler = (data: any) => {
    const fetchData = async () => {
      await props.renameChat(props.item.id, data.chatTitle);
      setShowEditBlock(false);
    }
    fetchData()
  }
  return (
    <ListItemDom {...props} date={date} removeChatHandler={removeChatHandler} showEditBlock={showEditBlock}
    showEditBlockHandler={showEditBlockHandler} renameChatHandler={renameChatHandler} inputsRenameChat={inputsRenameChat} />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, { removeChat, renameChat })(ListItem)