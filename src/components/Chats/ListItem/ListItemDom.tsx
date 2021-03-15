import React, { useRef, useEffect } from 'react';
import styles from './ListItem.module.scss';
import edit from './../../../assets/images/edit.svg';
import classnames from 'classnames';
import { Form, Field } from 'react-final-form';
import { NavLink } from 'react-router-dom';

type Props = {
  item: { userName: string, title: string, date: string, id: string },
  date: Date,
  removeChatHandler: (id: string) => void,
  showEditBlock: boolean,
  showEditBlockHandler: (show: boolean) => void,
  renameChatHandler: any,
  inputsRenameChat: { name: string, text: string }[],
  isAuth: boolean,
  isMyChat: boolean
}

export const ListItemDom = (props: Props) => {
  const refListItem = useRef(null);
  const handleMouseClick = (e: any) => {
    function composedPath(el: any) {
      const path = [];
      while (el) {
        path.push(el);
        if (el.tagName === 'HTML') {
          path.push(document);
          path.push(window);
          return path;
        }
        el = el.parentElement;
      }
    }
    const path = e.path || (e.composedPath && e.composedPath()) || composedPath(e.target);
    if (!path.includes(refListItem.current)) {
      props.showEditBlockHandler(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleMouseClick, true)
    return () => document.removeEventListener('click', handleMouseClick, true)
  })

  return (
    <div className={styles.wrapper} ref={refListItem}>
      <div className={styles.mainBlock}>
        <NavLink to={`/chat/${props.item.id}`} className={styles.leftSide}>
          <div className={styles.title}>
            {props.item.title}
          </div>
        </NavLink>
        <div className={styles.rightSide}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              Автор: {props.item.userName}
            </div>
            <div className={styles.date}>
              Дата создания: {props.date.toLocaleDateString()}
            </div>
          </div>
          {props.isAuth && props.isMyChat && <div className={classnames(styles.editButton)} onClick={(e) => {
            e.preventDefault();
            props.showEditBlockHandler(!props.showEditBlock)
          }}>
            <img src={edit} alt='' />
          </div>}
        </div>
      </div>
      <div className={classnames(styles.editBlock, { [styles.show]: props.showEditBlock })}>
        <div className={styles.renameChat}>
          <Form
            onSubmit={props.renameChatHandler}
            render={({ handleSubmit, pristine }) => (
              <form onSubmit={handleSubmit}>
                {
                  props.inputsRenameChat.map((el, i) => {
                    return (
                      <div className={styles.inputBlock} key={i}>
                        <Field name={el.name}>
                          {({ input, meta }) => (
                            <div>
                              <input {...input} type={'text'} placeholder={el.text} autoComplete={'off'} />
                              {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
                            </div>
                          )}
                        </Field>
                      </div>
                    )
                  })
                }
                <div className={classnames(styles.buttons)}>
                  <button type='submit' className={classnames(styles.submit, { [styles.disabled]: pristine })}>
                    Переименовать</button>
                </div>
              </form>
            )}
          />
        </div>
        <div className={styles.removeChatButton} onClick={() => props.removeChatHandler(props.item.id)}>
          Удалить
          </div>
      </div>
    </div>
  )
}
