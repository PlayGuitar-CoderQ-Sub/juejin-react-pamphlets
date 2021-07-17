import type { FC } from 'react';
import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

interface CountriesChartProps {
  data: Pick<CategoricalChartProps, 'data'>[];
  dataKey: string;
}

import React from 'react';

const CountriesChart: FC<CountriesChartProps> = ({ data, dataKey }) => {
  return (
    <BarChart
      width={1200}
      height={250}
      style={{ margin: 'auto' }}
      margin={{ top: 30, left: 20, right: 30 }}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill="#8884d8"></Bar>
    </BarChart>
  );
};

export default CountriesChart;
