import React, { useEffect, useState } from 'react';
import { Button, Typography } from 'antd';

import { IPeriod } from 'types/Period';

import { api } from 'config';

import styles from './styles.module.scss';

interface IProps {
  category: string;
  periods: IPeriod[];
}

const Main: React.FC<IProps> = ({ category, periods }) => {
  const [currentGranularity, setCurrentGranularity] = useState(periods[0].granularity);

  useEffect(() => {
    api
      .get(`${category}/candles?granularity=${currentGranularity}`)
      .then((res: any) => res.data)
      .then((data: []) => console.log(data));
  }, [category]);

  return (
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
          {periods.map(({ granularity, name }: IPeriod) => (
            <li key={name} data-granularity={granularity}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
