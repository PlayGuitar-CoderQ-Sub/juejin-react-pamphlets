import type { FC } from 'react';
import React, { Fragment, useEffect } from 'react';

const RenderAll: FC = (props) => {
  //@ts-ignore
  return <Fragment>{props.children(props)}</Fragment>;
};

function getUserName(): string | null {
  return parseInt(Math.random() * 10 + '') <= 5 ? '小于五' : null;
}

const Login: FC = (props) => {
  const userName = getUserName();
  if (userName) {
    const allProps = { userName, ...props };
    //@ts-ignore
    return <Fragment>{props.children(allProps)}</Fragment>;
  } else {
    return null;
  }
};

type userName = {
  userName: string;
};

interface AuthProps {
  login: FC<userName>;
  noLogin: FC;
}

const Auth: FC<AuthProps> = (props) => {
  const userName = getUserName();
  if (userName) {
    const allProps = { userName, ...props };
    return <Fragment>{props.login(allProps)}</Fragment>;
  } else {
    return <Fragment>{props.noLogin(props)}</Fragment>;
  }
};

const RenderPropsPage = () => {
  return (
    <>
      <h1></h1>
      <RenderAll>{() => <h1>hello world</h1>}</RenderAll>
      <Login>{(e) => <h1>hello {e.userName}</h1>}</Login>
      <Auth
        noLogin={() => <h1>Please login</h1>}
        login={(e) => <h1>你好啊，{e.userName}</h1>}
      />
    </>
  );
};

export default RenderPropsPage;
