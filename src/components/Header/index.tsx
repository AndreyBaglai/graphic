import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import User from 'components/User';
import Logo from './Logo';

import styles from './styles.module.scss';

const _Header: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userImgUrl, setUserImgUrl] = useState('');

  useEffect(() => {
    const _onInit = () => {
      console.log('init OK');
    };

    const _onError = () => {
      console.log('error');
    };

    console.log(window.gapi);
    try {
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          })
          .then(_onInit, _onError);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const OnSignIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();

    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      // console.log('ID: ' + profile.getId());
      // console.log('Full Name: ' + profile.getName());
      // console.log('Given Name: ' + profile.getGivenName());
      // console.log('Family Name: ' + profile.getFamilyName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail());

      setUserName(profile.getName());
      setUserImgUrl(profile.getImageUrl());
      setIsLogIn(true);

      const id_token = googleUser.getAuthResponse().id_token;
      // console.log('ID Token: ' + id_token);
    });
  };

  const OnSignOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });

    setIsLogIn(false);
  };

  return (
    <Header className={styles.header}>
      <Logo />
      <ul className={styles.menu}>
        <li className={styles.active}>
          <a href="/#">Exchange</a>
        </li>
        <li>
          <a href="/#">Dashboard</a>
        </li>
        <li>
          <a href="/#">Balances</a>
        </li>
        <li>
          <a href="/#">Wallet</a>
        </li>
      </ul>

      {!isLogIn && <Button onClick={OnSignIn}>Log In</Button>}
      {isLogIn && (
        <div className={styles.userWrapper}>
          <User name={userName} imgUrl={userImgUrl} />
          <Button onClick={OnSignOut}>Log Out</Button>
        </div>
      )}
    </Header>
  );
};

export default _Header;
