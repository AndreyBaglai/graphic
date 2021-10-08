import React from 'react';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Content from 'components/Content';
import Footer from 'components/Footer';

import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <Layout className={styles.wrapper}>
      <Header>Header</Header>
      <Layout className={styles.content}>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
