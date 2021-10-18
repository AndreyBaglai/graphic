import React, { useEffect, useState } from 'react';
import { Button, Typography } from 'antd';

import Chart from './Chart';

import { IPeriod } from 'types/Period';
import { ICandle, ICandles } from 'types/Candle';

import { MAX_CANDLES } from 'utils/const';
import { api, periods } from 'config';

import styles from './styles.module.scss';
import cn from 'classnames';

interface IProps {
  category: string;
}

const Main: React.FC<IProps> = ({ category }) => {
  const [idx, setIdx] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState<IPeriod>(periods[idx]);
  const [candles, setCandles] = useState<ICandles[]>([]);
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
      .then((res) => res.data)
      .then((data: [number[]]) => {
        let prepareData: ICandle[];

        if (data.length > MAX_CANDLES) {
          prepareData = data.slice(0, MAX_CANDLES).map((item: number[]): ICandle => {
            const [time, low_price, hight_price, open, close] = item;

            return {
              x: new Date(time * 1000),
              y: [open, hight_price, low_price, close],
            };
          });
        } else {
          prepareData = data.map((item: number[]) => {
            const [time, low_price, hight_price, open, close] = item;

            return {
              x: new Date(time * 1000),
              y: [open, hight_price, low_price, close],
            };
          });
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

      <Chart type={graphicType} candles={candles} />
    </main>
  );
};

export default Main;
