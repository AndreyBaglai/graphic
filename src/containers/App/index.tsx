import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Content from 'components/Content';

import { IPeriod } from 'types/Period';

import { api } from 'config';

import styles from './styles.module.scss';

const periods: IPeriod[] = [
  { period: '259200', name: '3d' },
  { period: '604800', name: '7d' },
  { period: '1209600', name: '14d' },
  { period: '2678400', name: '1m' },
];

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    api
      .get('')
      .then((res: any) => res.data)
      .then((data: []) => setCategories(data.slice(0, 5).map((item: any) => item.id)));
  }, []);

  const onSelectCategory = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const category = target.dataset.category;
    setIsSelectedCategory(true);
    category && setCurrentCategory(category);
  };

  return (
    <Layout className={styles.wrapper}>
      <Header></Header>
      <Layout className={styles.content}>
        <Sider categories={categories} onSelectCategory={onSelectCategory}></Sider>
        <Content
          isSelected={isSelectedCategory}
          category={currentCategory}
          periods={periods}></Content>
      </Layout>
    </Layout>
  );
};

export default App;
