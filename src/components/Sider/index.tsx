import React from 'react';
import { Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps {
  pairs: string[];
  onSelectCategory: (event: React.MouseEvent) => void;
  currentIndex: number;
}

const _Sider: React.FC<IProps> = ({ pairs, onSelectCategory, currentIndex }) => {
  return (
    <Sider width={330} className={styles.aside}>
      <Typography.Title level={2} className={styles.title}>
        Popular pair
      </Typography.Title>
      
      <ul className={styles.siderMenu} onClick={onSelectCategory}>
        {pairs.map((pair: string, idx: number) => (
          <li key={pair} data-pair={pair} data-index={idx} className={cn({[styles.active]: idx === currentIndex})}>
            {pair}
          </li>
        ))}
      </ul>
    </Sider>
  );
};

export default _Sider;
