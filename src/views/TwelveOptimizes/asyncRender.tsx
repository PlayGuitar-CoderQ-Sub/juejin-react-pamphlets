import { Suspense } from 'react';

import React from 'react';

function getUserInfo(): Promise<{ name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('成功');

      resolve({ name: 'coderQ' });
    }, 1000);
  });
}

function UserInfo() {
  // 获取用户数据信息， 然后再渲染组件
  const user = getUserInfo();
  return <h1>{user.name}</h1>;
}

export default function Index() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <UserInfo />
    </Suspense>
  );
}
