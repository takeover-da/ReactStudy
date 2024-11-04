import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import { useReducer, useState } from 'react';


function App() {

  function countReducer(oldCount, action) {
    
    if (action.type === 'UP') {
      return oldCount + action.num;

    } else if (action.type === 'DOWN') {
      return oldCount - action.num;

    } else if (action.type === 'RESET') {
      return 0;
    }
  }

  const [count, countDispatch] = useReducer(countReducer, 0);

  // 입력된 숫자
  const [num, setNum] = useState(0);

  return (
    <div className='App'>

      <input type='button' value='-' onClick={()=>{
        // 액션과 num
        countDispatch({type:'DOWN', num:num});
      }}></input>
      <input type='button' value='0' onClick={()=>{
        countDispatch({type:'RESET', num:num});
      }}></input>
      <input type='button' value='+' onClick={()=>{
        countDispatch({type:'UP', num:num});
      }}></input>

      <input type='text' onChange={(event)=>{
        setNum(Number(event.target.value));
      }}></input>

      <span>{count}</span>

    </div>
  );
}

export default App;
