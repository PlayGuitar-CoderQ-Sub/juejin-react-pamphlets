import type { FC } from 'react';
import React from 'react';

import AbstractSionProps from '@/views/FiveProps/components/AbstractionsProps/MixinProps';
import DrawoutProps from '@/views/FiveProps/components/AbstractionsProps/DrawoutProps';
import ShowProps from '@/views/FiveProps/components/InfuseProps/ShowProps';
import UnShowProps from '@/views/FiveProps/components/InfuseProps/UnShowProps';
import ExamplesForm from './components/FormComponent/index';

const FiveProps: FC = () => {
  return (
    <div>
      <h2>5.1 抽象props《混入props》：（请看打印结果）</h2>
      <p>
        注解：Father 组件一方面直接将 Index 组件 indexProps 抽象传递给
        Son，一方面混入 fatherProps 。
      </p>
      <AbstractSionProps />

      <h2>5.2 抽象props《抽离props》：（请看打印结果）</h2>
      <p>注解：功的将 indexProps 中的 age 属性抽离出来。</p>
      <DrawoutProps />

      <h2>5.3 注入props《显示注入props》：（请看打印结果）</h2>
      <p>注解：如上向 Son 组件绑定的 name 和 age 是能直观被看见的</p>
      <ShowProps />

      <h2>5.3 注入props《隐式注入props》：（请看打印结果）</h2>
      <p>注解: 将 mes 属性，隐式混入到了 Son 的 props 中。</p>
      <UnShowProps />

      <h2>5.4《组件实战Form，FormItem》：（请看打印结果）</h2>
      <p>注解: FormItem 用于管理,Input,输入框组件。</p>
      <ExamplesForm />
    </div>
  );
};

export default FiveProps;
