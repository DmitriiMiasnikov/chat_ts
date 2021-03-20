import React from 'react';
import styles from './CreateMessage.module.scss';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames';

type Props = {
  newMessageHandler: any,
}

export const CreateMessageDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
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
    </div>
  )
}