import React from 'react';
import styles from './Chats.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';
import ListItem from './ListItem/ListItem';

type Props = {
  chats: any,
  currentUser: { email: string, userName: string, _id: string },
  inputsCreateChat: { name: string, text: string }[],
  createNewChatHandler: any
}

export const ChatsDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {props.currentUser && <div className={styles.createNewChat}>
        <Form
          onSubmit={props.createNewChatHandler}
          render={({ handleSubmit, form, submitting }) => (
            <form onSubmit={handleSubmit}>
              {
                props.inputsCreateChat.map((el, i) => {
                  return (
                    <div className={styles.inputBlock} key={i}>
                      <Field name={el.name}>
                        {({ input, meta }) => (
                          <div>
                            <input {...input} type={'text'} placeholder={el.text} />
                            {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
                          </div>
                        )}
                      </Field>
                    </div>
                  )
                })
              }
              <div className={classnames(styles.buttons)}>
                <button type='submit' disabled={submitting} className={styles.submit}>Создать</button>
              </div>
            </form>
          )}
        />
      </div>}
      {Boolean(props.chats.length) && <div className={styles.list}>
              {props.chats.map((el:any, i: number) => {
                return <ListItem item={el} key={i} />
              })}
        </div>}
    </div>
  )
}