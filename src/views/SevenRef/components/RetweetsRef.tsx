import React, { useRef, useEffect } from 'react';

interface IndexCurrentProps {
  form: Form | null;
  index: Index;
  button: HTMLButtonElement | null;
}

type NewRefObject = {
  current: IndexCurrentProps;
};

interface IndexProps {
  forwardRef: NewRefObject;
}

// 表单组件
class Form extends React.Component {
  render() {
    return <div></div>;
  }
}

// Index组件
class Index extends React.Component<IndexProps> {
  componentDidMount() {
    const { forwardRef } = this.props;
    forwardRef.current = {
      form: this.form, // 给form组件实例， 绑定Ref form属性
      index: this, // 给index组件实例，绑定Ref index属性
      button: this.button, // 给button dom元素，绑定Ref button 属性
    };
  }
  form: Form | null = null;
  button: HTMLButtonElement | null = null;
  render() {
    return (
      <div>
        <button ref={(button) => (this.button = button)}>点击</button>
        <Form ref={(form) => (this.form = form)} />
      </div>
    );
  }
}

const FormwardRefIndex = React.forwardRef((props, ref: NewRefObject) => (
  <Index {...props} forwardRef={ref} />
));

// home组件
export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    console.log('合并转发Ref', ref.current);
  }, []);
  return <FormwardRefIndex ref={ref} />;
}
