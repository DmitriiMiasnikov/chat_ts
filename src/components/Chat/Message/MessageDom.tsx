import React from 'react';
import styles from './Message.module.scss';
import avatarSvg from './../../../assets/images/avatar.svg';
import deleteSvg from './../../../assets/images/delete.svg';

type Props = {
  message: { _id: string, chat_id: string, date: any, user_id: string, userName: string, text: string },
  date: Date,
  deleteMessageHandler: (id: string) => void,
}

export const MessageDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.user}>
          <img src={avatarSvg} alt='' />
          <div className={styles.userName}>
            {props.message.userName}
          </div>
        </div>
        <div className={styles.cloudMessage}>
          <div className={styles.text}>
            {props.message.text}
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.date}>
          <div>{props.date.toLocaleDateString()}</div>
          <div>{props.date.toLocaleTimeString()}</div>
        </div>
        <div className={styles.buttonDeleteMessage}>
          <img src={deleteSvg} alt='' onClick={() => props.deleteMessageHandler(props.message._id)} />
        </div>
      </div>

    </div>
  )
}