import React, { useEffect, useState } from 'react';
import { Button, Typography } from 'antd';
import ReactApexChart from 'react-apexcharts';

import { IPeriod } from 'types/Period';

import { api } from 'config';

import styles from './styles.module.scss';
import dayjs from 'dayjs';

interface IProps {
  category: string;
  periods: IPeriod[];
}

const defaultOptions: any = {
  chart: {
    height: 350,
    type: 'candlestick',
  },
  title: {
    text: 'CandleStick Chart - Category X-axis',
    align: 'left'
  },  annotations: {
    xaxis: [
      {
        x: 'Oct 06 14:00',
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#fff',
            background: '#00E396'
          },
          orientation: 'horizontal',
          offsetY: 7,
          text: 'Annotation Test'
        }
      }
    ]
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: (val: any) => {
        return dayjs(val).format('MMM DD HH:mm')
      }
    }
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
}

const Main: React.FC<IProps> = ({ category, periods }) => {
  const [currentGranularity, setCurrentGranularity] = useState(periods[0].granularity);
  const [candles, setCandles] = useState<any[]>([]);

  useEffect(() => {
    api
      .get(`${category}/candles?granularity=${currentGranularity}`)
      .then((res: any) => res.data)
      .then((data: []) => {
        const prepareDate: any = data.map((item: any) => ({
          x: new Date(item[0]),
          y: [item[3], item[2], item[1], item[4]]
        }));
        setCandles([{ name: 'candle', data: prepareDate}]);
        // console.log(data))
      })
  }, [category, currentGranularity]);

  const onChangePeriod = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    setCurrentGranularity(Number(target.dataset.granularity));
  }

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

        <ul className={styles.period} onClick={onChangePeriod}>
          {periods.map(({ granularity, name }: IPeriod) => (
            <li key={name} data-granularity={granularity}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <ReactApexChart options={defaultOptions} series={candles} type="candlestick" height={350} />
    </main>
  );
};

export default Main;
