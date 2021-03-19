import React from 'react';
import styles from './Chat.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';
import avatarSvg from './../../assets/images/avatar.svg';
import deleteSvg from './../../assets/images/delete.svg';

type Props = {
  match: any,
  newMessageHandler: any,
  messages: any,
  currentUser: { email: string, userName: string, _id: string },
  deleteMEssageHandler: (id: string) => void,
  getMessages: (page: number, chatId: string) => void,
  refEndList: any,
  refMessages: any
}

export const ChatDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.messages} ref={props.refMessages}>
        {props.messages.map((el: any, i: number) => {
          const date = new Date(el.date)
          return (
            <div className={styles.message} key={i}>
              <div className={styles.leftSide}>
                <div className={styles.user}>
                  <img src={avatarSvg} alt='' />
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
              <div className={styles.rightSide}>
                <div className={styles.date}>
                  <div>{date.toLocaleDateString()}</div>
                  <div>{date.toLocaleTimeString()}</div>
                </div>
                <div className={styles.buttonDeleteMessage}>
                  <img src={deleteSvg} alt='' onClick={() => props.deleteMEssageHandler(el._id)}/>
                </div>
              </div>

            </div>
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
