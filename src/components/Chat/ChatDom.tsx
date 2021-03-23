import React from 'react';
import styles from './Chat.module.scss';
import Message from './Message/Message';
import CreateMessage from './CreateMessage/CreateMessage';
import { Fetching } from './../Fetching';

type Props = {
  messages: any,
  currentUser: { email: string, userName: string, _id: string },
  refEndList: any,
  refMessages: any,
  fetching: boolean,
  setFetching: (fetching: boolean) => void,
  chatId: string,
  scrollToBottom: () => void
}

export const ChatDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.messages} ref={props.refMessages}>
        {props.fetching && <Fetching blockWidth={'100%'} blockHeight={'40px'} imageSize={'35px'} />}
        {props.messages.map((el: any, i: number) => {
          return (
            <Message message={el} key={i} />
          )
        })}
        <div ref={props.refEndList} />
      </div>
      {props.currentUser && <CreateMessage setFetching={props.setFetching} chatId={props.chatId}
        scrollToBottom={props.scrollToBottom} />}
    </div>
  )
}
