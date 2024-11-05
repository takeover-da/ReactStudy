import './App.css';
import { useReducer, useState } from 'react';


function App() {
  // 입력값, 리스트
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  // 입력받은 값을 호출하는 함수
  const handlechange = (props) => {
    setInputValue(props.target.value);
  };

  // 추가 버튼 함수
  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setList([...list, inputValue]);
      setInputValue('');
    }
  };

  // 초기화 버튼 함수
  const handleReset = () => {
    setList([]);
  };

  // 삭제 버튼 함수
  const handleDelete = (props) => {
    const newList = list.filter((todo, i) => i !== props);
    setList(newList);
  };

  return (
    <div>
      <h2>To-Do List</h2>
        <input type='text' placeholder='새 할일 입력' value={inputValue} onChange={handlechange}></input>
        <input type='button' value='추가' onClick={handleAdd}></input>
        <input type='button' value='초기화' onClick={handleReset}></input>
        <ul>
          {list.map((todo, props) => (
            <li key={props}>{todo}<input type='button' value='삭제' onClick={() => handleDelete(props)}/></li>
          ))}
        </ul>
    </div>
  );
}

export default App;