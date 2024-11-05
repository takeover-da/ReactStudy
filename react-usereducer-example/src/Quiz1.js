import './App.css';
import { useReducer, useState } from 'react';


// useState: 
// state를 관리하며 화면을 렌더링하는 도구

// useReducer:
// state를 관리하며 상태 변경 로직을 한곳에서 처리하는 도구

function App() {
  
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');
  // 결과는 -+*/ 연산자 종류에 따라 상태를 변경하는 로직이 다르기 때문에 useReducer로 변경
  // const [result, setResult] = useState(null);
  
  const inputNumber = (value) => {
    setInput(input + value);

    if (operator === null) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const inputOper = (value) => {
    setInput(input + value);
    setOperator(value);
  };

  // 리듀서 함수: 상태 변경 로직
  // 이전 state값, 액션(명령)
  // 리턴값: 새로운 state
  // 불변성: state는 이전의 값을 유지하려는 성격이 있음

  // const calculate = () => {
  const resultReducer = (oldResult, action) => {

    let tempResult = 0;

    switch (action.type) {
      case '+':
        tempResult = action.num1 + action.num2;
        break;
      case '-':
        tempResult = action.num1 - action.num2;
        break;
      case '*':
        tempResult = action.num1 * action.num2;
        break;
      case '/':
        tempResult = action.num1 / action.num2;
        break;
      case '0':
        tempResult = null;
        break;
      default:
        tempResult = null;
    }

    // setResult(tempResult);
    return tempResult;
  };

  // useState => useReducer를 사용하여  state 생성
  // 현재 state, dispatch함수
  // setState => dispatch
  // setState: state를 직접 변경하는 함수
  // dispatch: state를 리듀서함수를 통해 수정하는 함수
  const [result, resultDispatch] = useReducer(resultReducer, null);  //리듀서와 초기값

  const clear = () => {
    setInput('');
    resultDispatch({type:'0'});  //setState 대신 resultDispatch로 변경
    setNum1(null);
    setNum2(null);
    setOperator(null);
  };

  return (
    <div>
      <h1>계산기</h1>

      <div>
        <div><span>식:</span>{input}</div>
        <div><span>결과:</span>{result}</div>
      </div>

      <div>
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={()=>inputNumber(num)}>{num}</button>
        ))}
      </div>

      <div>
        {['+', '-', '*', '/'].map((op)=>(
          <button key={op} onClick={()=>inputOper(op)}>{op}</button>
        ))}
      </div>

      <button onClick={()=>{
        // set 대신 dispatch 호출
        // 명령(연산자) + 두숫자를 전달
        // dispatch -> reducer
        resultDispatch({type: operator, num1: num1, num2: num2});
      }}>=</button>
      <button onClick={clear}>C</button>

    </div>
  );
}

export default App;