import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import { ReactComponent as GraphicMenuIcon } from 'sources/icons/graphic-menu.svg';

import { api } from 'config';

import styles from './styles.module.scss';

const _Sider: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    api
      .get('')
      .then((res: any) => res.data)
      .then((data: []) => setNames(data.slice(0, 5).map((item: any) => item.id)));
  }, []);

  return (
    <Sider width={330}>
      <Typography.Title level={2} className={styles.title}>
        Popular pair
      </Typography.Title>
      <ul className={styles.siderMenu}>
        {names.map((name: string) => (
          <li key={name}>
            {name} <GraphicMenuIcon />
          </li>
        ))}
      </ul>
    </Sider>
  );
};

export default _Sider;
