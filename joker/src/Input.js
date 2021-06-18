import React from 'react';
const Input = () => {
  const [text, setText] = React.useState('');
  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <input value={text} onChange={({ target: { value } }) => setText(value)} />
  );
};

export default Input;
