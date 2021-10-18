import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import User from 'components/User';
import Logo from './Logo';

import { IUser } from 'types/User';

import styles from './styles.module.scss';

interface IProps {
  user: IUser | null;
}

const _Header: React.FC<IProps> = ({ user }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [UserFullName, setUserFullName] = useState('');
  const [userImgUrl, setUserImgUrl] = useState('');

  useEffect(() => {
    try {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setIsLogIn(true);
      setUserFullName(user.fullName);
      setUserImgUrl(user.imgUrl);
    }
  }, [user]);

  const OnSignIn = () => {
    window.gapi.auth2.getAuthInstance().signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      const id_token = googleUser.getAuthResponse().id_token;

      const user: IUser = {
        token: id_token,
        fullName: profile.getName(),
        imgUrl: profile.getImageUrl(),
      };

      localStorage.setItem('user', JSON.stringify(user));

      setUserFullName(profile.getName());
      setUserImgUrl(profile.getImageUrl());
      setIsLogIn(true);
    });
  };

  const OnSignOut = () => {
    window.gapi.auth2.getAuthInstance().signOut();
    localStorage.removeItem('user');
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

      {!isLogIn ? (
        <Button className={styles.authBtn} onClick={OnSignIn}>
          Log In
        </Button>
      ) : (
        <div className={styles.userWrapper}>
          <User name={UserFullName} imgUrl={userImgUrl} />
          <Button className={styles.authBtn} onClick={OnSignOut}>
            Log Out
          </Button>
        </div>
      )}
    </Header>
  );
};

export default _Header;
