import type { FC } from 'react';
import React, { useState, useEffect } from 'react';

import { BusService } from '@/utils/evnetBus';

const EventBusSon = () => {
  const [fatherSay, setFatherSay] = useState('');

  useEffect(() => {
    BusService.on('fatherSay', (value) => {
      setFatherSay(value);
    });

    return () => {
      BusService.off('fatherSay');
    };
  });

  return (
    <div>
      我是子组件123
      <div>父组件对我说： {fatherSay}</div>
      <input
        type="text"
        placeholder="我对父组件说"
        onChange={(e) => BusService.emit('childSay', e.target.value)}
      />
    </div>
  );
};

const EventBusFather: FC = () => {
  const [childSay, setChildSay] = useState('');

  useEffect(() => {
    BusService.on('childSay', (value) => {
      setChildSay(value);
    });
    return () => {
      BusService.off('childSay');
    };
  });

  return (
    <div>
      <h1>我是父组件</h1>
      <div>子组件对我说：{childSay}</div>
      <input
        type="text"
        placeholder="我对子组件说"
        onChange={(e) => BusService.emit('fatherSay', e.target.value)}
      />
      <EventBusSon />
    </div>
  );
};

export default EventBusFather;
