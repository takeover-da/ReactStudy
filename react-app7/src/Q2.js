import './App.css';
import { useState } from 'react';



function App() {

  // 글자의 수를 저장할 state 생성
  const [text, setText] = useState(0);
  
  return (
    <div>

    <input type='text' placeholder='텍스트를 입력하세요.' onChange={
      (event) => {
        console.log(event.target.value.length);
        setText(event.target.value.length);
      }
    }></input>

    <p>글자수: {text}</p>

    </div>
  );
}

export default App;