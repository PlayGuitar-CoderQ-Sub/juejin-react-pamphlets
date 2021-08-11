import React from 'react';

const Withposition = (Component) => {
  return class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        positionY: 0,
        positionX: 0,
      };
    }
    componentDidMount() {
      document.addEventListener('mousemove', (e) => {
        this.setState({
          positionX: e.clientX,
          positionY: e.clientY,
        });
      });
    }
    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
};

export default Withposition;
