import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Main from 'components/Main';

import { api } from 'config';
import { ICoinBaseResponse } from 'types/CoinBaseResponse';
import { MAX_PAIRS } from 'utils/const';
import { IUser } from 'types/User';

import styles from './styles.module.scss';

const App: React.FC = () => {
  const [pairs, setPairs] = useState<string[]>([]);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    api
      .get('')
      .then((res) => res.data)
      .then((data: ICoinBaseResponse[]) =>
        setPairs(
          data.slice(0, MAX_PAIRS).map((category: ICoinBaseResponse) => category.id),
        ),
      );
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      const user = localStorage.getItem('user');
      user && setCurrentUser(JSON.parse(user));
    }
  }, [])

  const onSelectCategory = useCallback((event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const category = target.dataset.pair;
    const index = target.dataset.index;

    setIsSelectedCategory(true);
    category && setCurrentCategory(category);
    index && setCurrentIndex(Number(index));
  }, [currentCategory]);

  return (
    <Layout className={styles.wrapper}>
      <Header user={currentUser} />
      <Layout className={styles.content}>
        <Sider
          pairs={pairs}
          onSelectCategory={onSelectCategory}
          currentIndex={currentIndex}
        />

        {isSelectedCategory ? (
          <Main category={currentCategory} />
        ) : (
          <Typography.Title level={2} className={styles.title}>
            Please, select any pair
          </Typography.Title>
        )}
      </Layout>
    </Layout>
  );
};

export default App;
