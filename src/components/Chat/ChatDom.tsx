import React from 'react';
import styles from './Chat.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';
import avatar from './../../assets/images/avatar.svg'

type Props = {
  match: any,
  newMessageHandler: any,
  messages: any
}

export const ChatDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.messages}>
        {props.messages.map((el: any, i: number) => {
          return (
            <div className={styles.message} key={i}>
              <div className={styles.user}>
                <img src={avatar} />
                <div className={styles.userName}>
                  {el.userName}
                </div>
              </div>
              <div className={styles.cloudMessage}>
                {el.text}
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.createMessage}>
        <Form
          onSubmit={props.newMessageHandler}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputBlock}>
                <Field name={'message'}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} type={'text'} placeholder={'Отправить сообщение'} />
                      {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div className={classnames(styles.buttons)}>
                <button type='submit' className={classnames(styles.submit, { [styles.disabled]: pristine })}>
                  Создать</button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  )
}
