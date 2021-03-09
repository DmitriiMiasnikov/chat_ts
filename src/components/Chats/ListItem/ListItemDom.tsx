import React from 'react';
import styles from './ListItem.module.scss';

type Props = {
  item: { userName: string, title: string, date: string }
}

export const ListItemDom = (props: Props) => {
  console.log(props.item);
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.title}>
          {props.item.title}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.userName}>
          Автор: {props.item.userName}
        </div>
        <div className={styles.date}>
          Дата создания: {props.item.date}
        </div>
      </div>
    </div>
  )
}
