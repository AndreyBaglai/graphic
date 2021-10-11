import React from 'react';
import { Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { ReactComponent as GraphicMenuIcon } from 'sources/icons/graphic-menu.svg';

import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps {
  categories: string[];
  onSelectCategory: (event: React.MouseEvent) => void;
  currentIndex: number;
}

const _Sider: React.FC<IProps> = ({ categories, onSelectCategory, currentIndex }) => {
  return (
    <Sider width={330}>
      <Typography.Title level={2} className={styles.title}>
        Popular pair
      </Typography.Title>
      <ul className={styles.siderMenu} onClick={onSelectCategory}>
        {categories.map((name: string, idx: number) => (
          <li key={name} data-category={name} data-index={idx} className={cn({[styles.active]: idx === currentIndex})}>
            {name} <GraphicMenuIcon />
          </li>
        ))}
      </ul>
    </Sider>
  );
};

export default _Sider;
