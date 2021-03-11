import React from 'react';
import styles from './Chat.module.scss';

type Props = {
  match: any
}

export const ChatDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {props.match.params.id}
    </div>
  )
}
