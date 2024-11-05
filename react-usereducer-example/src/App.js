import './App.css';
import { useReducer, useState } from 'react';


function App() {
  
  // todo를 state로 관리
  const [input, setInput] = useState('');
  // const [list, setList] = useState([]);

  // // 입력받은 값을 호출하는 함수
  // const handlechange = (props) => {
  //   setInput(props.target.value);
  // };

  // // 추가 버튼 함수
  // const handleAdd = () => {
  //   if (input.trim() !== '') {
  //     setList([...list, input]);
  //     setInput('');
  //   }
  // };

  // // 초기화 버튼 함수
  // const handleReset = () => {
  //   setList([]);
  // };

  // // 삭제 버튼 함수
  // const handleDelete = (props) => {
  //   const newList = list.filter((todo, i) => i !== props);
  //   setList(newList);
  // };

  // useReducer를 사용하여 state 생성
  // 준비물: 상태를 변경하는 로직을 가지고 있는 함수
  // 매개변수: 이전 todolist, 액션
  // 리턴값: 새로운 todolist
  // action {type: '명령', 그외 다른 값들...}
  const todoReducer = (oldState, action) => {

    // 조건: 추가, 삭제, 초기화
    if(action.type === 'ADD'){
      // state는 이전 값을 변경할 수 없음
      // 이전 state를 복사하여 새로운 객체로 생성해야함
      let newTodoList = [...oldState];  // 100번지->200번지

      // 만약 list에 한건도 없으면 0번, 있으면 마지막 id +1

      let id = 0;

      if(oldState.length > 0) {
        id = oldState.length;
      }

      let newTodo = {id:id, text:action.text};
      newTodoList.push(newTodo);  //리스트에 새로운 요소 추가
      return newTodoList;

    }else if(action.type === 'DELETE'){
      
      // 복제본 생성
      let newTodoList = [...oldState];

      // 배열의 filter함수를 사용하여 해당 요소 제거
      // filter함수: 배열을 순회하면서 조건을 만족하면 반환
      let filterList = newTodoList.filter((todo)=>todo.id !== action.id);

      return filterList;

    }else if(action.type === 'RESET'){
      
      return [];
    }
  }

  // useReducer를 사용하여 state(todolist)를 생성
  // 현재 state, state를 변경할때 쓰는 dispatch함수
  let [todolist, todoDispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <h2>To-Do List</h2>

        {/* <input type='text' placeholder='새 할일 입력' value={inputValue} onChange={handlechange}></input> */}

        {/* 입력필드 */}
        <input type='text' placeholder='새 할일 입력' value={input} onChange={
          (event)=>{
          setInput(event.target.value);
        }}></input>

        {/* <input type='button' value='추가' onClick={handleAdd}></input>
        <input type='button' value='초기화' onClick={handleReset}></input> */}

        {/* 버튼 */}
        <button onClick={()=>{
          // 추가 버튼을 클릭하면 입력필드에 있는 값을 꺼내서 todolist에 추가
          // list를 변경하기 위해서 dispach를 사용
          // 
          todoDispatch({type:'ADD', text: input});
          setInput('');
        }}>추가</button>
        <button onClick={
          ()=> {
            todoDispatch({type:'RESET'});
          }
        }>초기화</button>

        {/* <ul>
          {list.map((todo, props) => (
            <li key={props}>{todo}<input type='button' value='삭제' onClick={() => handleDelete(props)}/></li>
          ))}
        </ul> */}

        {/* 목록 */}
        <ul>
          {/* list 데이터를 사용하여 li태그를 동적으로 생성 */}
          {/* 배열의 map함수를 사용하여 li태그 생성, map함수는 배열의 요소만큼 순회 */}
          {/* jsx를 동적으로 생성할때는 key을 설정해야함 */}
          {
            todolist.map((todo)=>{
              return (
              <li key={todo.id}>{todo.text}
              <button onClick={() => {
                //dispatch에 액션을 전달
                // 단건삭제 > PK > 아이디
                todoDispatch({type:'DELETE', id:todo.id});
              }}>삭제</button>
              </li>);
            })
          }
        </ul>
    </div>
  );
}

export default App;