/**
 * FormItem一定要绑定 displayName 属性，用于让 <Form> 识别<FormItem />
 * 声明 onChange 方法，通过 props 提供给<Input>，作为改变 value 的回调函数。
 * FormItem过滤掉除了 input 以外的其他元素。
 */

import type { FC } from 'react';
import React from 'react';

interface FormItemProps {
  name?: string;
  handleChange?: (name?: string, value?: string) => void;
  value?: string;
  label?: string;
  children: JSX.Element;
}

export interface InputProps {
  onChange?: (value: string) => void;
  value?: string;
}

const FormItem: FC<FormItemProps> = (props) => {
  const { children, name, handleChange, value, label } = props;
  const onChange = (value) => {
    /* 通知上一次value 已经改变 */
    handleChange ? handleChange(name, value) : null;
  };
  return (
    <div className="form">
      <span className="label">{label}:</span>
      {children.type.displayName === 'input' && React.isValidElement(children)
        ? React.cloneElement<InputProps>(children as JSX.Element, {
            onChange,
            value,
          })
        : null}
    </div>
  );
};
FormItem.displayName = 'formItem';

export default FormItem;
