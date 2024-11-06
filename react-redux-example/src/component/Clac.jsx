import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export function Clac() {

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [input, setInput] = useState('');
  
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

  // redux 스토어의 dispatch 생성
  const dispatch = useDispatch();

  const clear = () => {
    setInput('');
    dispatch({type:'RESET'});
    setNum1(null);
    setNum2(null);
    setOperator(null);
  };

  // redux 스토어의 state 중에서 result 가지고 오기
  // const result = useSelector((state)=>{
  //   return state.result;
  // });
  const result = useSelector((state) => state.result);

  return (
    <>
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
        // 디스패치로 액션과 작업에 사용할 데이터 전달
        dispatch({type:operator, num1:num1, num2:num2});
      }}>=</button>

      <button onClick={clear}>C</button>
    </>
  );
}
