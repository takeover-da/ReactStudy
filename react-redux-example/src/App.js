/*
<상태 관리>

1. useState: state 한건만 관리
2. useReducer: state 한건만 관리 + 상태 변경 로직 분리
3. createStore: state를 여러건 관리 + 전역 범위 관리
*/

import './App.css';
import { useReducer } from 'react';
import { Todo } from './component/Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// todo 앱에서 관리하는 state
// state는 왜 쓰지? 값이 변경이 되면 화면을 다시 생성해야할때
// 입력필드의 todo
// todo 리스트 -> 스토어를 통해서 관리

// 스토어 만드는 방법
// 리듀서 함수 정의 -> 스토어 생성 -> Provider 설정

// 1. 리듀서 함수 정의: 상태 변경 로직
const todoReducer = (oldState, action) => {

  // state의 특징
  // 1. react는 이전 state를 보관하려는 성격이 있음
  // 2. state는 object로 관리되기 때문에 값을 추가해도 변화x
  // object 변수에는 주소값이 저장됨

  // state 복제본 생성
  let newState = {...oldState};

  //
  switch (action.type) {
    case 'ADD':
      
      // 새로운 todo의 ID
      let newId = 0;

      // 리스트가 하나도 없으면 0, 있으면 리스트의 길이
      // newState: {todolist:[]}
      if (newState.todolist.length !== 0) {
        newId = newState.todolist.length;
      }

      // 리스트에 새로운 요소 추가
      newState.todolist.push({ id: newId, text: action.text });

      // 새로운 배열x 새로운 state반환!
      return newState;

    case 'DELETE':
      // state 중에서 list를 꺼내고 리스트에서 선택한 아이디를 제거
      // filter함수는 원본데이터를 변경하지 않음, 그래서 state의 list를 교체해야함
      const filterList = newState.todolist.filter(todo => {  
        return todo.id !== action.id
      });

      // 변경된 리스트로 교체
      newState.todolist = filterList;

      return newState;

    case 'RESET':

      // state 중에 list를 초기화하여 반환
      newState.todolist = [];

      // 새로운 state 반환
      return newState;
      
    default:
      return oldState;
  }
};

function App() {

  // 2. redux 스토어 생성
  // useReducer -> createStore
  // 인자: 리듀서, state 초기값
  const store = createStore(todoReducer, {todolist:[]});

  return (
    <div>
      <h3>To-Do List</h3>
      {/* 3. 스토어를 사용하는 위치에 Provider로 감싸기 */}
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;