import React from 'react';
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

type Props = {
  showAuthorization: boolean,
  showRegistration: boolean
}
const App = (props: Props) => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Switch>
          <Redirect exact from={'/'} to={'/main'} />
          <Route path={'/main'} render={() => <Main />} />
          <Route path={'/chats'} render={() => <Chats />} />
          <Route path={'/chat/:id'} render={() => <Chat />} />
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
    showRegistration: state.auth.showRegistration
  }
}

export default connect(mapStatesToProps, {})(App);
