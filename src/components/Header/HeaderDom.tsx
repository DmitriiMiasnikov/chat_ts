import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

type Props = {
  headerItems: {title: string, link: string}[],
  headerItemsRight: {title: string, name: string}[],
  authHandler: (name: string) => void
}

export const HeaderDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {
          props.headerItems.map(({title, link}: {title: string, link: string}, i: number) => {
            return <NavLink to={link} key={i} className={styles.item}>
              {title}
            </NavLink>
          })
        }
      </div>
      <div className={styles.itemsRight}>
        {props.headerItemsRight.map((el:any ,i:number) => {
          return (
            <div className={styles.itemRight} key={i} onClick={() => props.authHandler(el.name)}>
              {el.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}