import React from 'react';
import { connect } from 'react-redux';
import { AuthDom } from './AuthDom';
import { setShowAuthorization, authorizationUser } from './../../store/authReducer';

type Props = {
  isAuth: boolean,
  inputsAuthorization: { name: string, text: string }[],
  setShowAuthorization: (show: boolean) => void,
  authorizationUser: (name: string, password: string) => void,
}

const Auth = (props: Props) => {
  const authHandler = (data: any) => {
    props.authorizationUser(data.name, data.password);
  }
  const closeAuthorization = () => {
    props.setShowAuthorization(false);
  }

  return (
    <AuthDom {...props} authHandler={authHandler} closeAuthorization={closeAuthorization}/>
  )
}
const mapStatesToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    inputsAuthorization: state.auth.inputsAuthorization
  }
}

export default connect(mapStatesToProps, { setShowAuthorization, authorizationUser })(Auth)