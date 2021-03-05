import React from 'react';
import { connect } from 'react-redux';
import { UsersDom } from './UsersDom';

type Props = {
  
}

const Users = (props: Props) => {
  return (
    <UsersDom />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}
export default connect(mapStatesToProps, {})(Users)