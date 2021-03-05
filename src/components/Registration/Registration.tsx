import React from 'react';
import { connect } from 'react-redux';
import { RegistrationDom } from './RegistrationDom';

type Props = {
  
}

const Registration = (props: Props) => {
  return (
    <RegistrationDom />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, {})(Registration)