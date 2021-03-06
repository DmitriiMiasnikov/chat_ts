import React from 'react';
import { connect } from 'react-redux';
import { RegistrationDom } from './RegistrationDom';
import { setShowRegistration, registrationUser } from './../../store/authReducer';

type Props = {
  inputsRegistration: { name: string, text: string }[],
  setShowRegistration: (show: boolean) => void,
  registrationUser: (name: string, password: string, email: string) => void,
  isAuth: boolean
}

const Registration = (props: Props) => {
  const registrationHandler = (data: any) => {
    props.registrationUser(data.name, data.password, data.email);
  }
  const closeRegistration = () => {
    props.setShowRegistration(false);
  }

  return (
    <RegistrationDom {...props} registrationHandler={registrationHandler} closeRegistration={closeRegistration} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    inputsRegistration: state.auth.inputsRegistration,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStatesToProps, { setShowRegistration, registrationUser })(Registration)