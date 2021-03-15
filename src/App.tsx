import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import styles from './App.module.scss';
import Auth from './components/Auth/Auth';
import Chats from './components/Chats/Chats';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration';
import Users from './components/Users/Users';
import Chat from './components/Chat/Chat';
import { setWindowSize, setIsMobile } from './store/mainSettingsReducer';

type Props = {
  showAuthorization: boolean,
  showRegistration: boolean,
  setWindowSize: (windowSize: {width: number, height: number }) => void,
  isMobile: boolean,
  windowSize: {width: number, height: number },
  setIsMobile: (width: number) => void
}
const App = (props: Props) => {
  const [setWindowSize, windowSize, setIsMobile] = [props.setWindowSize, props.windowSize, props.setIsMobile];
  const widthHandler = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight })
  }
  const subscribeResize = () => window.addEventListener('resize', widthHandler, true);
  const unsubscribeResize = () => window.removeEventListener('resize', widthHandler, true);

  useEffect(() => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight });
    setIsMobile(window.innerWidth);
  }, [setWindowSize, setIsMobile])

  useEffect(() => {
    subscribeResize()
    return () => unsubscribeResize()
  })

  return (
    <div className={styles.app} style={{ height: windowSize.height - 10 }}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content} style={{ height: windowSize.height - 70 }}>
        <Switch>
          <Redirect exact from={'/'} to={'/main'} />
          <Route path={'/main'} render={() => <Main />} />
          <Route path={'/chats'} render={() => <Chats />} />
          <Route path={'/chat/:chatId'} render={() => <Chat />} />
          <Route path={'/users'} render={() => <Users />} />
        </Switch>
      </div>
      {props.showAuthorization && <Auth />}
      {props.showRegistration && <Registration />}
    </div>
  );
}

const mapStatesToProps = (state: any) => {
  return {
    showAuthorization: state.auth.showAuthorization,
    showRegistration: state.auth.showRegistration,
    isMobile: state.mainSettings.isMobile,
    windowSize: state.mainSettings.windowSize
  }
}

export default connect(mapStatesToProps, { setWindowSize, setIsMobile })(App);
