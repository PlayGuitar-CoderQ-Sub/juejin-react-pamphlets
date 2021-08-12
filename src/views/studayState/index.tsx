import React from 'react';
import ReactDOM from 'react-dom';
const { unstable_batchedUpdates, flushSync } = ReactDOM;

export default class StudyState extends React.Component {
  state = { number: 0 };

  // 触发逻辑
  logic = () => {
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback1', this.state.number);
    });
    console.log(this.state.number);

    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback2', this.state.number);
    });
    console.log(this.state.number);

    this.setState({ number: this.state.number + 1 }, () => {
      console.log('callback3', this.state.number);
    });
    console.log(this.state.number);
  };

  // 使用unstable_batchedUpdates  修复异步更新问题
  handleClickSync = () => {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        this.logic();
      });
    });
  };

  // 测试批量更新问题
  handleClick = () => {
    this.logic();
  };

  // 优先级更新
  handerClickPriority = () => {
    setTimeout(() => {
      this.setState({
        number: 1,
      });
    });

    this.setState({
      number: 2,
    });

    flushSync(() => {
      this.setState({ number: 3 });
    });

    this.setState({ number: 4 });
  };

  render() {
    console.log(this.state.number);
    return (
      <div>
        {this.state.number};
        <button onClick={this.handleClickSync}>修复批量更新number++</button>;
        <button onClick={this.handleClick}>批量更新number++</button>;
        <button onClick={this.handerClickPriority}>
          提升更新优先级number++
        </button>
        ;
      </div>
    );
  }
}
