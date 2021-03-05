import React from 'react';
import styles from './Chats.module.scss';

type Props = {
  chats: any
}

export const ChatsDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      Chats
    </div>
  )
}