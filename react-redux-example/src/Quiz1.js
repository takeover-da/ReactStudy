import './App.css';
import { Clac } from './component/Clac';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


function App() {
  
  // 리듀서 함수 정의: 상태 변경 로직
  // 매개변수: 이전 state, action: 명령과 작업에 필요한 값
  // 리턴값: 새로운 state
  // state: {} object
  const resultReducer = (oldState, action) => {

    // state 복제본 생성
    let newState = {...oldState}

    switch (action.type) {
      case '+':
        newState.result = action.num1 + action.num2;
        break;
      case '-':
        newState.result = action.num1 - action.num2;
        break;
      case '*':
        newState.result = action.num1 * action.num2;
        break;
      case '/':
        newState.result = action.num1 / action.num2;
        break;
      // case '0':
      //   newState.result = null;
      //   break;
      // default:
      //   newState.result = null;
      case 'RESET':
        newState.result = null;
        break;
      default:
        newState.result = null;
    }

    // return newState.result;
    return newState;
  };

  const store = createStore(resultReducer, {result:0});

  // 스토어를 사용할 준비: 
  // 1.리듀서함수 정의 -> 2.스토어 생성 -> 3.Provider

  return (
    <div>
      <h1>계산기</h1>
      <Provider store={store}>
        <Clac></Clac>
      </Provider>
    </div>
  );
}

export default App;