import React from 'react';
const FcButton = ({ count: parentCount }) => {
  const [count, setCount] = React.useState(parentCount);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Click me: {count}
    </button>
  );
};
export default class Button extends React.Component {
  render() {
    return <FcButton count={0} />;
  }
}
/*
const Button = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => console.log(count), [count]);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Joker has arrived
    </button>
  );
};

export default Button;
*/
