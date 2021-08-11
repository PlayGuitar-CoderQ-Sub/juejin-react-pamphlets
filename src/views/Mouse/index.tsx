import type { FC } from 'react';
import React from 'react';
import MousePosition from '@/components/MousePosiition';

const ToA = (props) => {
  return (
    <div>
      <span>鼠标的横坐标{props.positionX}</span>
      <span>鼠标的纵坐标{props.positionY}</span>
    </div>
  );
};

const ToB = (props) => {
  return (
    <div>
      <span>鼠标的横坐标{props.positionX}</span>
      <span>鼠标的纵坐标{props.positionY}</span>
    </div>
  );
};

const WithToA = MousePosition(ToA);
const WithToB = MousePosition(ToB);

const MousePage: FC = () => {
  return (
    <div>
      <WithToA />
      <WithToB />
    </div>
  );
};

export default MousePage;
