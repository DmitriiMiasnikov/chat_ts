import React from 'react';
import styles from './Auth.module.scss';
import classnames from 'classnames';
import close from './../../assets/images/close.svg';
import { Form, Field } from 'react-final-form';

type Props = {
  closeAuthorization: () => void,
  authHandler: any,
  inputsAuthorization: { name: string, text: string }[]
}

export const AuthDom = (props: Props) => {
  return (
    <div className={classnames(styles.wrapper, styles.show)}>
    <div className={styles.registrationBlock}>
    <div onClick={() => props.closeAuthorization()} className={styles.close}>
      <img src={close} alt=''/>
    </div>
      <div className={styles.title}>
      Авторизация
      </div>
      <Form
        onSubmit={props.authHandler}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            {
              props.inputsAuthorization.map((el, i) => {
                return (
                  <div className={styles.line} key={i}>
                    <Field name={el.name}>
                      {({ input, meta }) => (
                        <div>
                          <label>*</label>
                          <input {...input} type={'text'} placeholder={el.text} />
                          {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
                        </div>
                      )}
                    </Field>
                  </div>
                )
              })
            }
            <div className={classnames(styles.line, styles.buttons)}>
              <button type='submit' disabled={submitting} className={styles.submit}>Войти</button>
              <button onClick={() => props.closeAuthorization()} className={styles.closeButton}>Отмена</button>
            </div>
          </form>
        )}
      />
    </div>
  </div>
  )
}