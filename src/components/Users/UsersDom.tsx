import React from 'react';
import styles from './Users.module.scss';

type Props = {
  users: any
}

export const UsersDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {Boolean(props.users.length) && props.users.map((el: any) => {
        return <div>{el.userName}</div>
      })}
    </div>
  )
}