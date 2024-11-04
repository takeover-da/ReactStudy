import './App.css';
import { useReducer } from 'react';


function App() {

  // 리듀서 함수: 이벤트에 따라 state를 변경하는 함수
  // 이전 state값, 액션
  function countReducer(oldCount, action) {
    
    if (action === 'UP') {
      return oldCount + 1;

    } else if (action === 'DOWN') {
      return oldCount - 1;

    } else if (action === 'RESET') {
      return 0;
    }
  }

  // 리듀서 함수를 사용하여 state 생성
  // 인자: 리듀서(state을 변경하는 로직을 가지는 함수), state초기값
  // 반환: 현재 state, 값을 변경하는 dispatch함수
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <div className='App'>
      <input type='button' value='-' onClick={()=>{
        countDispatch('DOWN');  //명령
      }}></input>
      <input type='button' value='0' onClick={()=>{
        countDispatch('RESET');
      }}></input>
      <input type='button' value='+' onClick={()=>{
        countDispatch('UP');
      }}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
