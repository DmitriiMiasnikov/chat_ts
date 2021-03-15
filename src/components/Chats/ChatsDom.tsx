import React from 'react';
import styles from './Chats.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';
import ListItem from './ListItem/ListItem';
import fetching from './../../assets/images/fetching.svg';

type Props = {
  chats: any,
  currentUser: { email: string, userName: string, _id: string },
  inputsCreateChat: { name: string, text: string }[],
  createNewChatHandler: any,
  fetching: boolean
}

export const ChatsDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {props.currentUser && <div className={styles.createNewChat}>
        <Form
          onSubmit={props.createNewChatHandler}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit}>
              {
                props.inputsCreateChat.map((el, i) => {
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
                  Создать</button>
              </div>
            </form>
          )}
        />
      </div>}
      {props.fetching && <div className={styles.fetching}><img src={fetching} alt='' /></div>}
      {Boolean(props.chats.length) && <div className={styles.list}>
        {props.chats.map((el: any, i: number) => {
          return <ListItem item={el} key={i} />
        })}
      </div>}
    </div>
  )
}