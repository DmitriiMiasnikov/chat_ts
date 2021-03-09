import React from 'react';
import styles from './ListItem.module.scss';

type Props = {
item: any
}

export const ListItemDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {props.item.title}
    </div>
  )
}
