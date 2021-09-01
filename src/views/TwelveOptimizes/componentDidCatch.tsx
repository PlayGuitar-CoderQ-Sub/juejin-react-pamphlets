import React from 'react';

function ErrorTest() {
  return;
}

function Test() {
  return <div>let us learn React!</div>;
}

class Index extends React.Component {
  state = {
    hasError: false,
  };

  // componentDidCatch(...arg) {
  //   console.log('上传错误日志', arg);
  //   this.setState({
  //     hasError: true,
  //   });
  // }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div>
        {hasError ? <div>组件出现错误</div> : <ErrorTest />}
        <div>hello, my name is alien</div>
        <Test />
      </div>
    );
  }
}

export default Index;
