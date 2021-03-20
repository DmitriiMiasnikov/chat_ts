import React from 'react';
import styles from './Chat.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';
import fetching from './../../assets/images/fetching.svg';
import Message from './Message/Message';

type Props = {
  match: any,
  newMessageHandler: any,
  messages: any,
  currentUser: { email: string, userName: string, _id: string },
  getMessages: (page: number, chatId: string) => void,
  refEndList: any,
  refMessages: any,
  fetching: boolean
}

export const ChatDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.messages} ref={props.refMessages}>
      {props.fetching && <div className={styles.fetching}><img src={fetching} alt='' /></div>}
        {props.messages.map((el: any, i: number) => {
          return (
            <Message message={el} key={i} />
          )
        })}
        <div ref={props.refEndList} />
      </div>
      {props.currentUser && <div className={styles.createMessage}>
        <Form
          onSubmit={props.newMessageHandler}
          render={({ handleSubmit, pristine, form }) => (
            <form
              onSubmit={async (event) => {
                await handleSubmit(event);
                await form.reset();
              }}
            >
              <div className={styles.inputBlock}>
                <Field name={'message'}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type={'text'} placeholder={'Отправить сообщение'} autoComplete={'off'} />
                      {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div className={classnames(styles.buttons)}>
                <button type='submit' className={classnames(styles.submit, { [styles.disabled]: pristine })}>
                  Отправить</button>
              </div>
            </form>
          )}
        />
      </div>}
    </div>
  )
}
