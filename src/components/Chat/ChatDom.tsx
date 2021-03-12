import React from 'react';
import styles from './Chat.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';

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
            <div>{el.text}</div>  
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
