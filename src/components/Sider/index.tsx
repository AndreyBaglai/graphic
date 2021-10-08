import React from 'react';
import { Menu, Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { ReactComponent as GraphicMenuIcon } from 'sources/icons/graphic-menu.svg';

import styles from './styles.module.scss';

const _Sider: React.FC = () => {
  return (
    <Sider width={330}>
      <Typography.Title level={2} className={styles.title}>Popular pair</Typography.Title>
      <ul
        className={styles.siderMenu}
        >
        <li>option1 <GraphicMenuIcon/></li>
        <li>option2 <GraphicMenuIcon/></li>
        <li>option3 <GraphicMenuIcon/></li>
        <li>option4 <GraphicMenuIcon/></li>
        <li>option5 <GraphicMenuIcon/></li>
      </ul>
    </Sider>
  );
};

export default _Sider;
