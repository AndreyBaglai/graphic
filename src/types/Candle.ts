export interface ICandles {
  name: string;
  data: ICandle[];
}

export interface ICandle {
  x: Date;
  y: number[];
}
