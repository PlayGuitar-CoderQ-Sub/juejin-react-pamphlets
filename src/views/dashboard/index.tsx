import type { FC } from 'react';
import './index.less';
import React, { useState, useEffect } from 'react';

import GlobalStatsComponent from '@/components/GlobalStats';
import SelectDataKey from '@/components/SelectDataKey';
import CountriesChart from '@/components/CountriesChart';

const BASE_URL = 'https://corona.lmao.ninja/v2';

const Dashborad: FC = () => {
  const [globalStats, setGlobalStats] = useState({});
  const [countries, setCountroes] = useState([]);
  const [key, setKey] = useState('cases');

  useEffect(() => {
    const fetchGlobalStats = async () => {
      const response = await fetch(`${BASE_URL}/all`);
      const data = await response.json();
      setGlobalStats(data);
    };

    fetchGlobalStats();
    const intervalId = setInterval(fetchGlobalStats, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const featchCountries = async () => {
      const response = await fetch(`${BASE_URL}/countries?sort=${key}`);
      const data = await response.json();
      setCountroes(data.slice(0, 10));
    };

    featchCountries();
  }, [key]);

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
