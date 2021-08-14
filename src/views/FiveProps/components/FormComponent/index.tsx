/**
 * @description 功能
 *  ①Form 组件可以被 ref 获取实例。然后可以调用实例方法 submitForm 获取表单内容，用于提交表单，resetForm 方法用于重置表单。
 *  ②Form组件自动过滤掉除了FormItem之外的其他React元素
 *  ③FormItem 中 name 属性作为表单提交时候的 key ，还有展示的 label 。
 *  ④ FormItem 可以自动收集 <Input/> 表单的值。
 */

import React, { useRef } from 'react';

import Form from './Form';
import FormItem from './FormItem';
import Input from './input';

export default () => {
  const form = useRef<Form>(null);
  const submit = () => {
    // 表单提交
    form.current?.submitForm((formValue) => {
      console.log(formValue);
    });
  };

  const reset = () => {
    form.current?.restForm();
  };

  return (
    <div className="box">
      <Form ref={form}>
        <FormItem name="name" label="我是">
          <Input />
        </FormItem>
        <FormItem name="mes" label="我想对大家说">
          <Input />
        </FormItem>
        <input placeholder="不需要的input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="searchbtn" onClick={submit}>
          提交
        </button>
        <button className="concellbtn" onClick={reset}>
          重置
        </button>
      </div>
    </div>
  );
};
