import React from 'react';

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
