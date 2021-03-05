import React from 'react';
import { connect } from 'react-redux';
import { AuthDom } from './AuthDom';

type Props = {
  
}

const Auth = (props: Props) => {
  return (
    <AuthDom />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, {})(Auth)