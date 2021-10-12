import React, { useEffect, useState } from 'react';
import { Button, Typography } from 'antd';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';

import { IPeriod } from 'types/Period';

import { api } from 'config';

import styles from './styles.module.scss';
import cn from 'classnames';

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
    text: '',
    align: 'left',
  },
  annotations: {
    xaxis: [
      {
        x: 'Oct 06 14:00',
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#fff',
            background: '#00E396',
          },
          orientation: 'horizontal',
          offsetY: 7,
          text: 'Annotation Test',
        },
      },
    ],
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: (val: any) => dayjs(val).format('MMM DD HH:mm'),
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

const Main: React.FC<IProps> = ({ category, periods }) => {
  const [idx, setIdx] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState<IPeriod>(periods[idx]);
  const [candles, setCandles] = useState<any[]>([]);
  const [graphicType, setGraphicType] = useState<'line' | 'candlestick'>('candlestick');

  const onSetGraphicTypeLine = () => {
    graphicType === 'candlestick' && setGraphicType('line');
  };

  const onSetGraphicTypeCandle = () => {
    graphicType === 'line' && setGraphicType('candlestick');
  };

  useEffect(() => {
    api
      .get(
        `${category}/candles?granularity=${currentPeriod.granularity}&start=${currentPeriod.start}&end=${currentPeriod.end}`,
      )
      .then((res: any) => res.data)
      .then((data: []) => {
        let prepareData: any;

        if (data.length > 75) {
          prepareData = data.slice(0, 75).map((item: any) => ({
            x: new Date(item[0]*1000),
            y: [item[3], item[2], item[1], item[4]],
          }));
        } else {
          prepareData = data.map((item: any) => ({
            x: new Date(item[0]*1000),
            y: [item[3], item[2], item[1], item[4]],
          }));
        }

        setCandles([{ name: 'candle', data: prepareData }]);
      });
  }, [category, currentPeriod]);

  const onChangePeriod = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    setCurrentPeriod(periods[Number(target.dataset.index)]);
    setIdx(Number(target.dataset.index));
  };

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <Typography.Title level={2} className={styles.title}>
          {category}
        </Typography.Title>
        <div className={styles.buttonsWrapper}>
          <Button
            className={cn({ [styles.activeBtn]: graphicType === 'candlestick' })}
            onClick={onSetGraphicTypeCandle}
            type="primary"
            size="large">
            Coin
          </Button>
          <Button
            className={cn({ [styles.activeBtn]: graphicType === 'line' })}
            onClick={onSetGraphicTypeLine}
            type="primary"
            size="large">
            Line
          </Button>
        </div>

        <ul className={styles.period} onClick={onChangePeriod}>
          {periods.map(({ name }: IPeriod, index) => (
            <li key={name} data-index={index} className={cn({ [styles.active]: index === idx })}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      {graphicType === 'line' && (
        <ReactApexChart options={defaultOptions} series={candles} type="line" height={350} />
      )}
      {graphicType === 'candlestick' && (
        <ReactApexChart options={defaultOptions} series={candles} type="candlestick" height={350} />
      )}
    </main>
  );
};

export default Main;
