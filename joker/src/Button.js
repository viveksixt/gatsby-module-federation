import React from 'react';
export default class Button extends React.Component {
  state = { counter: 1 };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click me: {this.state.counter}</button>
    );
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
