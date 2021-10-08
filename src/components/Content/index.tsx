import React from 'react';
import { Button, Typography } from 'antd';

import styles from './styles.module.scss';

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <Typography.Title level={2} className={styles.title}>
          Optiona1
        </Typography.Title>
        <div className={styles.buttonsWrapper}>
          <Button type="primary" size="large">Coin</Button>
          <Button type="primary" size="large">Line</Button>
        </div>
        <ul className={styles.period}>
          <li>3d</li>
          <li>7d</li>
          <li>2w</li>
          <li>1m</li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
