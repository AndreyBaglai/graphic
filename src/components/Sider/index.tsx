import React from 'react';
import { Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { ReactComponent as GraphicMenuIcon } from 'sources/icons/graphic-menu.svg';

import styles from './styles.module.scss';

interface IProps {
  categories: string[];
  onSelectCategory: (event: React.MouseEvent) => void;
}

const _Sider: React.FC<IProps> = ({ categories, onSelectCategory }) => {
  return (
    <Sider width={330}>
      <Typography.Title level={2} className={styles.title}>
        Popular pair
      </Typography.Title>
      <ul className={styles.siderMenu} onClick={onSelectCategory}>
        {categories.map((name: string) => (
          <li key={name} data-category={name}>
            {name} <GraphicMenuIcon />
          </li>
        ))}
      </ul>
    </Sider>
  );
};

export default _Sider;
