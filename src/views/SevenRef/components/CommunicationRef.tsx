import React, { useState } from 'react';

interface SonProps {
  toFather: (sonMes: string) => void;
}

class Son extends React.PureComponent<SonProps> {
  state = {
    fatherMes: '',
    sonMes: '',
  };

  fatherSay = (fatherMes) => this.setState({ fatherMes });

  render() {
    const { fatherMes, sonMes } = this.state;
    return (
      <div className="sonbox">
        <div className="title">子组件</div>
        <p>父组件对我说：{fatherMes}</p>
        <div className="label">对父组件说</div>
        <input
          type="text"
          onChange={(e) => this.setState({ sonMes: e.target.value })}
          className="input"
        />
        <button
          className="searchbtn"
          onClick={() => this.props.toFather(sonMes)}
        >
          to father
        </button>
      </div>
    );
  }
}

// 父组件
export default function Father() {
  const [sonMes, setSonMes] = useState('');
  const sonInstance = React.useRef<Son>(null);
  const [fatherMes, setFatherMes] = React.useState('');
  const toSon = () => sonInstance.current?.fatherSay(fatherMes);
  return (
    <div className="box">
      <div className="title">父组件</div>
      <p>子组件对我说：{sonMes}</p>
      <div className="label">对子组件说</div>{' '}
      <input onChange={(e) => setFatherMes(e.target.value)} className="input" />
      <button className="searchbtn" onClick={toSon}>
        to son
      </button>
      <Son ref={sonInstance} toFather={setSonMes} />
    </div>
  );
}
