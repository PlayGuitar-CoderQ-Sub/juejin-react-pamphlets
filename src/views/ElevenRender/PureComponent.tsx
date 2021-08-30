import React from 'react';

interface ChildrenProps {
  number: number;
}

interface ChildrenState {
  name: string;
  age: number;
  obj: {
    numbner: number;
  };
}

class Children extends React.PureComponent<ChildrenProps, ChildrenState> {
  state = {
    name: 'alien',
    age: 18,
    obj: {
      number: 1,
    },
  };
  changeObjNumber = () => {
    const { obj } = this.state;
    obj.number++;
    this.setState({ obj });
  };
  render() {
    console.log('组件渲染');
    return (
      <div>
        <button onClick={() => this.setState({ name: 'alien' })}>
          state相同情况
        </button>
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          state不同情况
        </button>
        <button onClick={this.changeObjNumber}>state为引用数据类型时候</button>
        <div>hello,my name is alien,let us learn React!</div>
      </div>
    );
  }
}

export default function Home() {
  const [numberA, setNumberA] = React.useState(0);
  const [numberB, setNumberB] = React.useState(0);
  return (
    <div>
      <div> 父组件改变props </div>
      <button onClick={() => setNumberA(numberA + 1)}>改变numberA</button>
      <button onClick={() => setNumberB(numberB + 1)}>改变numberB</button>
      <Children number={numberA} />
    </div>
  );
}
