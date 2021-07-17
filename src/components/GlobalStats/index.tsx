import type { FC } from 'react';
import React from 'react';

interface StatProps {
  color?: string;
  number?: number;
}

interface GlobalStats {
  cases: number;
  deaths: number;
  active: number;
  recovered: number;
  updated: Date | number | string;
}

interface GlobalStatsProps {
  stats: Partial<GlobalStats>;
}

const Stat: FC<StatProps> = ({ number, color }) => {
  return <span style={{ color: color, fontWeight: 'bold' }}>{number}</span>;
};

const GlobalStats: FC<GlobalStatsProps> = ({ stats }) => {
  const { cases, deaths, recovered, active, updated } = stats;
  return (
    <div className="global-stats">
      <small>Updated on {new Date(updated!).toLocaleString()}</small>
      <table>
        <tr>
          <td>
            Cases: <Stat number={cases} color="red" />
          </td>
          <td>
            Deaths: <Stat number={deaths} color="gray" />
          </td>
          <td>
            Recovered: <Stat number={recovered} color="green" />
          </td>
          <td>
            Active: <Stat number={active} color="orange" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default GlobalStats;
