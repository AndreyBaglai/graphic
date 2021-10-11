import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import dayjs from 'dayjs';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Content from 'components/Content';

import { IPeriod } from 'types/Period';

import { api } from 'config';

import styles from './styles.module.scss';

const periods: IPeriod[] = [
  {
    name: '3d',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(3, 'days').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 900,
  },
  {
    name: '7d',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(7, 'days').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 3600,
  },
  {
    name: '14d',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(14, 'days').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 21600,
  },
  {
    name: '1m',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(1, 'months').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 21600,
  },
];

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isSelectedCategory, setIsSelectedCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    api
      .get('')
      .then((res: any) => res.data)
      .then((data: []) => setCategories(data.slice(0, 5).map((item: any) => item.id)));
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
      <Header></Header>
      <Layout className={styles.content}>
        <Sider categories={categories} onSelectCategory={onSelectCategory} currentIndex={currentIndex}></Sider>
        {isSelectedCategory && <Content category={currentCategory} periods={periods}></Content>}
      </Layout>
    </Layout>
  );
};

export default App;
