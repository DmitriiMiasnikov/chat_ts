import React from 'react';
import styles from './ListItem.module.scss';
import edit from './../../../assets/images/edit.svg';
import classnames from 'classnames';
import { Form, Field } from 'react-final-form';

type Props = {
  item: { userName: string, title: string, date: string, id: string },
  date: Date,
  removeChatHandler: (id: string) => void,
  showEditBlock: boolean,
  showEditBlockHandler: () => void,
  renameChatHandler: any,
  inputsRenameChat: { name: string, text: string }[],
}

export const ListItemDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBlock}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            {props.item.title}
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              Автор: {props.item.userName}
            </div>
            <div className={styles.date}>
              Дата создания: {props.date.toLocaleDateString()}
            </div>
          </div>
          <div className={styles.editButton} onClick={() => props.showEditBlockHandler()}>
            <img src={edit} alt='' />
          </div>
        </div>
      </div>
      <div className={classnames(styles.editBlock, { [styles.show]: props.showEditBlock })}>
        <div className={styles.renameChat}>
        <Form
          onSubmit={props.renameChatHandler}
          render={({ handleSubmit, form, submitting }) => (
            <form onSubmit={handleSubmit}>
              {
                props.inputsRenameChat.map((el, i) => {
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
                <button type='submit' disabled={submitting} className={styles.submit}>Переименовать</button>
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
