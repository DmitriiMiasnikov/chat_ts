import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Header.module.scss';

type Props = {
  headerItems: { title: string, link: string }[],
  headerItemsRight: { title: string, name: string }[],
  authHandler: (name: string) => void,
  isAuth: boolean,
  currentUser: { email: string, userName: string, _id: string }
}

export const HeaderDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {
          props.headerItems.map(({ title, link }: { title: string, link: string }, i: number) => {
            return <NavLink to={link} key={i} className={styles.item}>
              {title}
            </NavLink>
          })
        }
      </div>
      <div className={styles.itemsRight}>
        {!props.isAuth ? props.headerItemsRight.map((el: any, i: number) => {
          return (
            <div className={styles.itemRight} key={i} onClick={() => props.authHandler(el.name)}>
              {el.title}
            </div>
          )
        }) : <div className={classnames(styles.account, styles.itemRight)}>
          {props.currentUser && props.currentUser.userName}
        </div>}
      </div>
    </div>
  )
}