import type { FC } from 'react';
import React from 'react';
import './index.less';

const MimSwitch: FC = () => {
  return (
    <>
      <div className="switch">
        <div className="switch__1">
          <input id="switch-1" type="checkbox" />
          <label htmlFor="switch-1"></label>
        </div>

        <div className="switch__2">
          <input id="switch-2" type="checkbox" defaultChecked />
          <label htmlFor="switch-2"></label>
        </div>
      </div>

      <div className="checkbox">
        <div className="checkbox__1">
          <input id="checkbox-1" type="checkbox" />
          <label htmlFor="checkbox-1">
            <i className="material-icons">done</i>
          </label>
        </div>
        <div className="checkbox__2">
          <input id="checkbox-2" type="checkbox" defaultChecked />
          <label htmlFor="checkbox-2">
            <i className="material-icons">done</i>
          </label>
        </div>
      </div>
    </>
  );
};

export default MimSwitch;
