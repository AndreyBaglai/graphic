import React from 'react';
import { Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';

import Logo from './Logo';

import styles from './styles.module.scss';

const _Header: React.FC = () => {
  return (
    <Header className={styles.header}>
      <Logo />
      <ul className={styles.menu}>
        <li><a href="#">Exchange</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Balances</a></li>
        <li><a href="#">Wallet</a></li>
      </ul>
      <Button>Login</Button>
    </Header>
  );
};

export default _Header;
