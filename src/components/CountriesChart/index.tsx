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
  onClick: (e: { activeLabel: any }) => void;
}

import React from 'react';

const CountriesChart: FC<CountriesChartProps> = ({
  data,
  dataKey,
  onClick,
}) => {
  return (
    <BarChart
      width={1200}
      height={250}
      style={{ margin: 'auto' }}
      margin={{ top: 30, left: 20, right: 30 }}
      data={data}
      onClick={onClick}
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
