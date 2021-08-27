import React, { Component } from 'react';

const DynamicHoc = (loadRouter) => {
  return class Content extends React.Component {
    state = {
      Component: null,
    };
    componentDidMount() {
      if (this.state.Component) return;
      loadRouter()
        .then((module) => module.default) // 动态加载component 组件
        .then((Component) => this.setState({ Component }));
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : <Loading />;
    }
  };
};
