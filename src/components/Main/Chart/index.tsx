import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { ApexChartOptions } from 'config';
import { ICandles } from 'types/Candle';

interface IProps {
  type: 'line' | 'candlestick';
  candles: ICandles[];
}

const Chart: React.FC<IProps> = ({ type, candles }) => {
  return (
    <>
      {type === 'line' && (
        <ReactApexChart options={ApexChartOptions} series={candles} type="line" height={350} />
      )}
      {type === 'candlestick' && (
        <ReactApexChart
          options={ApexChartOptions}
          series={candles}
          type="candlestick"
          height={350}
        />
      )}
    </>
  );
};

export default Chart;
