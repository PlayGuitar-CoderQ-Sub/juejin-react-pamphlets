import { useState, useEffect, useCallback } from 'react';

const BASE_URL = 'https://corona.lmao.ninja/v2';

interface useCoronaProps {
  initialData?: any;
  converter?: (data: any[]) => any[];
  refetchInterval?: any;
}

export const useCoronaAPI = (
  path,
  {
    initialData,
    converter = (data: any) => data,
    refetchInterval,
  }: useCoronaProps,
) => {
  const [data, setData] = useState(initialData);
  const convertData = useCallback(converter, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      setData(convertData(data as any[]));
    };
    fetchData();

    if (refetchInterval) {
      const intervalId = setInterval(fetchData, refetchInterval!);
      return () => clearInterval(intervalId);
    }
  }, [convertData, path, refetchInterval]);

  return data;
};
