import React from 'react';
import { connect } from 'react-redux';
import { MainDom } from './MainDom';

type Props = {
  
}

const Main = (props: Props) => {
  return (
    <MainDom />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}
export default connect(mapStatesToProps, {})(Main)