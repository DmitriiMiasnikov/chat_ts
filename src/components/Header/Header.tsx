import React from 'react';
import { connect } from 'react-redux';
import { HeaderDom } from './HeaderDom';
import { setShowAuthorization, setShowRegistration } from './../../store/authReducer';

type Props = {
  headerItems: { title: string, link: string }[],
  headerItemsRight: { title: string, name: string }[],
  setShowAuthorization: (show: boolean) => void,
  setShowRegistration: (show: boolean) => void,
}

const Header = (props: Props) => {

  const authHandler = (name: string) => {
    if (name === 'registration') {
      props.setShowRegistration(true);
    } else if (name === 'authorization') {
      props.setShowAuthorization(true);
    }
  }

  return (
    <HeaderDom {...props} authHandler={authHandler} />
  )
}

const mapStatesToProps = (state: any) => {
  return {
    headerItems: state.header.headerItems,
    headerItemsRight: state.header.headerItemsRight
  }
}
export default connect(mapStatesToProps, { setShowAuthorization, setShowRegistration })(Header)