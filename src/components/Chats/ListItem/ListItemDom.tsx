import React from 'react';
import styles from './ListItem.module.scss';
import edit from './../../../assets/images/edit.svg';
import classnames from 'classnames';

type Props = {
  item: { userName: string, title: string, date: string, id: string },
  date: Date,
  removeChatHandler: (id: string) => void,
  showEditBlock: boolean,
  showEditBlockHandler: () => void
}

export const ListItemDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBlock}>
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
          <div className={styles.editButton} onClick={() => props.showEditBlockHandler()}>
            <img src={edit} alt='' />
          </div>
        </div>
      </div>
      <div className={classnames(styles.editBlock, { [styles.show]: props.showEditBlock })}>
          <div className={styles.removeChatButton} onClick={() => props.removeChatHandler(props.item.id)}>
            удалить
          </div>
      </div>
    </div>
  )
}
