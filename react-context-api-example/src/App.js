import './App.css';
import { createContext, useContext } from 'react';


// 공통 테마 생성(초록색 실선 테두리)
const themeDefault = { border: '10px solid red'};

// 컨텍스트 생성
const themeContext = createContext(themeDefault);  //초기값

function Sub1() {

  // 컨텍스트에서 현재 테마 꺼내기
  const theme = useContext(themeContext);
  console.log('Sub1 theme:', theme);

  // sub2와 sub2를 포함하고 있는 sub1을 provider로 감싸고 provider에 새로운 스타일 주기
  return (
    <themeContext.Provider value={{border: '10px solid green'}}>
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2></Sub2>
    </div>
    </themeContext.Provider>
  );
}

// sub2와 sub3은 가장 가까운 provider의 값을 전달받음(초기값x)
function Sub2() {
  const theme = useContext(themeContext);
  console.log('Sub2 theme:', theme);
  
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  console.log('Sub3 theme:', theme);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

function App() {
  const theme = useContext(themeContext);
  return (
    <div className='root' style={theme}>
      <Sub1></Sub1>
    </div>
  );
}

export default App;