import React, { useState } from 'react';

import './index.less';

export default function Index() {
  const [isAnimation, setAnimation] = useState(false);
  return (
    <div>
      <button onClick={() => setAnimation(true)}>改变颜色</button>
      <div className={isAnimation ? 'current animation' : 'current'}></div>
    </div>
  );
}
