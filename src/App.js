import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(4)

  function decCount() {
    setCount(count - 1);
  }
  function incCount() {
    setCount(count + 1);
  }
  return (
    <div className="App">
            <button onClick={decCount}>-</button>
            <span>{count}</span>
            <button onClick={incCount}>+</button>
    </div>
  );
}

export default App;
