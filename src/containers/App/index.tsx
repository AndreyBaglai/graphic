import React from 'react';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Content from 'components/Content';

import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <Layout className={styles.wrapper}>
      <Header></Header>
      <Layout className={styles.content}>
        <Sider></Sider>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default App;
