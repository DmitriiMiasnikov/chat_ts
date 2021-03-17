import React, { useEffect, useRef } from 'react';
import styles from './Chat.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';
import avatar from './../../assets/images/avatar.svg'

type Props = {
  match: any,
  newMessageHandler: any,
  messages: any,
  currentUser: { email: string, userName: string, _id: string },
}

export const ChatDom = (props: Props) => {
  const [messages] = [props.messages];
  const refEndList: any = useRef(null);
  const scrollToBottom = () => {
    refEndList.current?.scrollIntoView({ behavior: 'auto' });
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className={styles.wrapper}>
      <div className={styles.messages}>
        {props.messages.map((el: any, i: number) => {
          return (
            <div className={styles.message} key={i}>
              <div className={styles.user}>
                <img src={avatar} alt='' />
                <div className={styles.userName}>
                  {el.userName}
                </div>
              </div>
              <div className={styles.cloudMessage}>
                <div className={styles.text}>
                {el.text}
                </div>
              </div>
            </div>
          )
        })}
        <div ref={refEndList} />
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
