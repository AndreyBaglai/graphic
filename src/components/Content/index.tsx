import React from 'react';
import { Content } from 'antd/lib/layout/layout';

//import styles from './styles.module.scss';

const Main: React.FC = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}>
      Content
    </Content>
  );
};

export default Main;
