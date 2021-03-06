import React from 'react';
import styles from './Registration.module.scss';
import classnames from 'classnames';
import close from './../../assets/images/close.svg';
import { Form, Field } from 'react-final-form';

type Props = {
  closeRegistration: () => void,
  registrationHandler: any,
  inputsRegistration: {name: string, text: string}[]
}

export const RegistrationDom = (props: Props) => {
  return (
    <div className={classnames(styles.wrapper, styles.show)}>
      <div className={styles.registrationBlock}>
      <div onClick={() => props.closeRegistration()} className={styles.close}>
        <img src={close} alt=''/>
      </div>
        <div className={styles.title}>
        Регистрация
        </div>
        <Form
          onSubmit={props.registrationHandler}
          render={({ handleSubmit, form, submitting }) => (
            <form onSubmit={handleSubmit}>
              {
                props.inputsRegistration.map((el, i) => {
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
                <button type='submit' disabled={submitting} className={styles.submit}>зарегистрировать</button>
                <button onClick={() => props.closeRegistration()} className={styles.closeButton}>Отмена</button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  )
}