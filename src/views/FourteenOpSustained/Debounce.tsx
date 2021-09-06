import React from 'react';

export function debounce(fn, time) {
  let timer = null as NodeJS.Timeout | null;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      //@ts-ignore
      fn.apply(this, arg);
    }, time);
  };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = debounce(this.handleClick, 500);
    this.handleChange = debounce(this.handleChange, 300);
  }

  handleClick = () => {
    console.log('点击事件标题提交');
  };

  handleChange = (e) => {
    console.log('搜索框-请求数据', e);
  };

  render() {
    return (
      <div>
        <input
          placeholder="搜索表单"
          onChange={this.handleChange}
          type="text"
        />
        <br />
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
}
