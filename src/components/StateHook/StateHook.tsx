import React, { useState } from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You have {fruit}</p>
      <button onClick={() => setFruit('kiwi')}>Click me</button>
    </div>
  );
};

export default StateHook;
