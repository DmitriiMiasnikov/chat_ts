import React from 'react';
import { connect } from 'react-redux';
import { HeaderDom } from './HeaderDom';

type Props = {
  headerItems: {title: string, link: string}[]
}

const Header = (props: Props) => {
  return (
    <HeaderDom {...props}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    headerItems: state.header.headerItems
  }
}
export default connect(mapStatesToProps, {})(Header)