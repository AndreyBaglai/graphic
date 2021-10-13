import axios from 'axios';
import dayjs from 'dayjs';

import { IPeriod } from 'types/Period';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const periods: IPeriod[] = [
  {
    name: '3d',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(3, 'day').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 3600,
  },
  {
    name: '7d',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(1, 'week').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 21600,
  },
  {
    name: '14d',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(2, 'week').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 21600,
  },
  {
    name: '1m',
    end: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    start: dayjs().subtract(1, 'month').format('YYYY-MM-DDTHH:mm:ss'),
    granularity: 86400,
  },
];

export const ApexChartOptions: ApexCharts.ApexOptions | undefined = {
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
      formatter: (ms: string) => dayjs(ms).format('MMM DD HH:mm'),
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};
