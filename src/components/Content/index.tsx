import React from 'react';
import { Button, Typography } from 'antd';

import { IPeriod } from 'types/Period';

import styles from './styles.module.scss';

interface IProps {
  category: string;
  isSelected: boolean;
  periods: IPeriod[];
}

const Main: React.FC<IProps> = ({ isSelected, category, periods }) => {
  return isSelected ? (
    <main className={styles.main}>
      <div className={styles.top}>
        <Typography.Title level={2} className={styles.title}>
          {category}
        </Typography.Title>
        <div className={styles.buttonsWrapper}>
          <Button type="primary" size="large">
            Coin
          </Button>
          <Button type="primary" size="large">
            Line
          </Button>
        </div>
        <ul className={styles.period}>
          {periods.map(({ period, name }: IPeriod) => (
            <li key={period} data-period={period}>{name}</li>
          ))}
        </ul>
      </div>
    </main>
  ) : null;
};

export default Main;
