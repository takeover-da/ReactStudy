import './App.css';
import { useState } from 'react';



function App() {

  // count state 생성
  const [count, setCount] = useState(0);
  
  function zero() {
    return (
      setCount(0)
    );
  }
  
  function up() {
    return (
      setCount(count+1)
    );
  }
  
  function down() {
    return (
      setCount(count-1)
    );
  }
  
  return (
    <div>

    <input type='button' value="-" onClick={down}></input>

    <input type='button' value="0" onClick={zero}></input>

    <input type='button' value="+" onClick={up}></input>

    <span>{count}</span>

    </div>
  );
}

export default App;
