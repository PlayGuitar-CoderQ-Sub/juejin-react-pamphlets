import type { FC } from 'react';
import './index.less';
import React, { useState } from 'react';

import GlobalStatsComponent from '@/components/GlobalStats';
import SelectDataKey from '@/components/SelectDataKey';
import CountriesChart from '@/components/CountriesChart';

import { useCoronaAPI } from '@/hooks/useCornaAPI';

const Dashborad: FC = () => {
  const [key, setKey] = useState('cases');

  const globalStats = useCoronaAPI('/all', {
    initialData: {},
    refetchInterval: 5000,
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data) => data.slice(0, 10),
  });

  return (
    <div className="dashboard-content">
      <h1>COVID-19</h1>
      <GlobalStatsComponent stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)} />
      <CountriesChart data={countries} dataKey={key} />
    </div>
  );
};

export default Dashborad;
