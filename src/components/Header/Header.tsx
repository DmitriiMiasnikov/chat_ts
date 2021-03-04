import React from 'react';
import { connect } from 'react-redux';
import { HeaderDom } from './HeaderDom';

type Props = {
  
}

const Header = (props: Props) => {
  return (
    <HeaderDom />
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}
export default connect(mapStatesToProps, {})(Header)