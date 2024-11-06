import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


// todo ui를 반환하는 컴포넌트
export const Todo = () => {

  const [input, setInput] = useState('');

  // redux 스토어에서 dispatch함수 가져오기
  const dispatch = useDispatch();

  // redux 스토어의 state 중 todolist 가져오기
  const list = useSelector((state)=>{
    return state.todolist;
  });

  return (
    <div>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="새 할 일 입력"
    />

{/* 추가버튼 */}
    <button onClick={()=>{

      // 디스패치에 ''액션을 전달
      dispatch({type:'ADD', text:input});

      setInput('');
    }}>추가</button>

{/* 초기화버튼 */}
    <button onClick={() => {

      // 디스패치에 ''액션을 전달
      dispatch({type:'RESET'});

  }}>초기화</button>

{/* 할일목록 */}
    <ul>
      {/* 배열의 map함수를 사용하여 li태그 생성 */}
      {/* jsx에서 태그를 동적으로 생성할때는 key 입력해야함 */}
      {list.map((todo)=>{
        return (<li key={todo.id}>{todo.text}
        <button onClick={()=>{

          // 디스패치에 'DELETE'액션 전달
          // 삭제 -> 단건삭제 또는 일괄삭제
          // 단건삭제 -> PK -> TODO의 ID
          dispatch({type:'DELETE', id:todo.id});

        }}>삭제</button></li>);
      })}
    </ul>
    </div>
  )
}

// export default Todo