import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Content from 'components/Content';

import { api } from 'config';
import { ICoinBaseResponse } from 'types/CoinBaseResponse';
import { MAX_CATEGORIES } from 'utils/const';

import styles from './styles.module.scss';

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    api
      .get('')
      .then((res) => res.data)
      .then((data: ICoinBaseResponse[]) =>
        setCategories(
          data.slice(0, MAX_CATEGORIES).map((category: ICoinBaseResponse) => category.id),
        ),
      );
  }, []);

  const onSelectCategory = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const category = target.dataset.category;
    const index = target.dataset.index;

    setIsSelectedCategory(true);
    category && setCurrentCategory(category);
    index && setCurrentIndex(Number(index));
  };

  return (
    <Layout className={styles.wrapper}>
      <Header />
      <Layout className={styles.content}>
        <Sider
          categories={categories}
          onSelectCategory={onSelectCategory}
          currentIndex={currentIndex}
        />

        {isSelectedCategory ? (
          <Content category={currentCategory}></Content>
        ) : (
          <Typography.Title level={2} className={styles.title}>
            Please, select any category
          </Typography.Title>
        )}
      </Layout>
    </Layout>
  );
};

export default App;
