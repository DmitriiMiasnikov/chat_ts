import React from 'react';
import styles from './ListItem.module.scss';
import edit from './../../../assets/images/edit.svg';

type Props = {
  item: { userName: string, title: string, date: string },
  date: Date
}

export const ListItemDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.title}>
          {props.item.title}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.userInfo}>
        <div className={styles.userName}>
          Автор: {props.item.userName}
        </div>
        <div className={styles.date}>
          Дата создания: {props.date.toLocaleDateString()}
        </div>
        </div>
        <div className={styles.editButton}>
          <img src={edit} alt='' />
        </div>
      </div>
    </div>
  )
}
