import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styles from './App.module.scss';
import Chats from './components/Chats/Chats';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Users from './components/Users/Users';

const App = () => {
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
          <Route path={'/users'} render={() => <Users />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
