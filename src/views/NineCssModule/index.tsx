import type { FC } from 'react';
import React from 'react';

import classes from '../NineCssModule/index.module.css';
import './nine.less';

const NineCssModule: FC = () => {
  return (
    <div>
      <span className={classes.content}>NineCssModule</span>
      <h3 className="red_box">123123</h3>
    </div>
  );
};

export default NineCssModule;
