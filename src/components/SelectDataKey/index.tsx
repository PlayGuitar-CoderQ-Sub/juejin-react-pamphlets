import type { FC } from 'react';
import React from 'react';

interface SelectDataKeyProps {
  onChange: (e: any) => void;
}

const SelectDataKey: FC<SelectDataKeyProps> = ({ onChange }) => {
  return (
    <>
      <label htmlFor="key-select">Select a key for sorting: </label>
      <select id="key-select" onChange={onChange}>
        <option value="cases">Cases</option>
        <option value="todayCases">Today Cases</option>
        <option value="deaths">Death</option>
        <option value="recovered">Recovered</option>
        <option value="active">Active</option>
      </select>
    </>
  );
};

export default SelectDataKey;
