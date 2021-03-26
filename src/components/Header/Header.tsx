import { connect } from 'react-redux';
import { HeaderDom } from './HeaderDom';
import { setShowAuthorization, setShowRegistration } from './../../store/authReducer';
import { withRouter } from 'react-router';

type Props = {
  headerItems: { title: string, link: string }[],
  headerItemsRight: { title: string, name: string }[],
  setShowAuthorization: (show: boolean) => void,
  setShowRegistration: (show: boolean) => void,
  isAuth: boolean,
  currentUser: {email: string, userName: string, _id: string},
  history: any
}

const Header = (props: Props) => {

  const authHandler = (name: string) => {
    if (name === 'registration') {
      props.setShowRegistration(true);
    } else if (name === 'authorization') {
      props.setShowAuthorization(true);
    }
  }
  const openUserInfo = (user: any) => {
    props.history.push(`user/${user._id}`)
  }
  return (
    <HeaderDom {...props} authHandler={authHandler} openUserInfo={openUserInfo}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    headerItems: state.header.headerItems,
    headerItemsRight: state.header.headerItemsRight,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser
  }
}
export default withRouter(connect(mapStatesToProps, { setShowAuthorization, setShowRegistration })(Header)) 