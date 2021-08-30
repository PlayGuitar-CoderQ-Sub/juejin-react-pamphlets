import React from 'react';

function Children({ number }) {
  console.log('子组件渲染');
  return <div>let us learn React， {number}</div>;
}

// 未缓存的父组件
// export default class Index extends React.Component {
//   state = {
//     numberA: 0,
//     numberB: 0,
//   };
//   render() {
//     return (
//       <div>
//         <Children number={this.state.numberA} />
//         <button
//           onClick={() => this.setState({ numberA: this.state.numberA + 1 })}
//         >
//           改变numberA-{this.state.numberA}
//         </button>
//         <button
//           onClick={() => this.setState({ numberB: this.state.numberB + 1 })}
//         >
//           改变numberB-{this.state.numberB}
//         </button>
//       </div>
//     );
//   }
// }

interface IndexProps {
  numberA: number;
  numberB: number;
}

// 处理过的父组件
export default class Index extends React.Component<any, IndexProps> {
  public component: JSX.Element;
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0,
    };
    this.component = <Children number={this.state.numberA} />;
  }
  controllComponentRender = () => {
    const { props } = this.component;
    if (props.number !== this.state.numberA) {
      return (this.component = React.cloneElement(this.component, {
        number: this.state.numberA,
      }));
    }
    return this.component;
  };
  render() {
    return (
      <div>
        {this.controllComponentRender()}
        <button
          onClick={() => this.setState({ numberA: this.state.numberA + 1 })}
        >
          改变numberA
        </button>
        <button
          onClick={() => this.setState({ numberB: this.state.numberB + 1 })}
        >
          改变numberB
        </button>
      </div>
    );
  }
}
