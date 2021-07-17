import type { FC } from 'react';
import './index.less';
import React, { useState } from 'react';

import GlobalStatsComponent from '@/components/GlobalStats';
import SelectDataKey from '@/components/SelectDataKey';
import CountriesChart from '@/components/CountriesChart';
import HistoryChartGroup from '@/components/HistoryChartGroup';

import { useCoronaAPI } from '@/hooks/useCornaAPI';

const Dashborad: FC = () => {
  const [key, setKey] = useState('cases');
  const [country, setCountry] = useState(null);

  const globalStats = useCoronaAPI('/all', {
    initialData: {},
    refetchInterval: 5000,
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data: any) => data.slice(0, 10),
  });

  const history = useCoronaAPI(`/historical/${country}`, {
    initialData: {},
    converter: (data) => data.timeline,
  });

  return (
    <div className="dashboard-content">
      <h1>COVID-19</h1>
      <GlobalStatsComponent stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)} />
      <CountriesChart
        data={countries}
        dataKey={key}
        onClick={(payload) => setCountry(payload.activeLabel)}
      />
      {country ? (
        <>
          <h2>Histroy for {country}</h2>
          <HistoryChartGroup history={history} />
        </>
      ) : (
        <h2>Click on a country to show its histroy.</h2>
      )}
    </div>
  );
};

export default Dashborad;
