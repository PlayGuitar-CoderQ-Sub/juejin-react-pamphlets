/**
 * @description Input组件
 * 设计思想：绑定 displayName 标识input
 * input DOM 元素，绑定 onChange 方法，用于传递 value
 */

import React from 'react';
import type { FC } from 'react';
import { InputProps } from './FormItem';

const Input: FC<InputProps> = ({ onChange, value }) => {
  return (
    <input
      className="input"
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
    />
  );
};
/* 给Component 增加标签 */
Input.displayName = 'input';

export default Input;
