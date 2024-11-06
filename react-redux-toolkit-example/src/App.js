import './App.css';
import Counter from './component/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux - 상태관리도구
// createStore - 스토어 생성 함수
// provider - 스토어를 제공하는 함수

// state - num

// 스토어 만드는 방법
// 리듀서 함수 정의 -> 스토어 생성 -> Provider 설정

// 1. 리듀서 함수(상태변경로직)
// 매개변수: 이전 state, 액션(명령과 작업에 필요한 데이터)
// 리턴값: 새로운 state
function reducer(oldState, action) {
  
  // state 복제본 생성
  let newState = {...oldState};

  // state중에서 num의 값을 step만큼 증가시키기
  if(action.type === 'UP') {
    newState.num = newState.num + action.step;
    return newState;
  }

  return oldState;
}
//
// 2. 스토어 생성
// 인자: 리듀서, state 초기값
const initState = {num:0};
const store = createStore(reducer, initState);


function App() {
  return (
    <div>
      {/* 3. 스토어가 필요한 곳에 Provider 설정 */}
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;