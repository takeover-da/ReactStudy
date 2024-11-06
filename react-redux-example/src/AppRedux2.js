import './App.css';
import { Left1 } from './component/Left';
import { Right1 } from './component/Right';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// 리듀서 함수 정의 -> 스토어 생성 -> Provider 설정

// 리듀서 함수 정의: state 상태 변경 로직을 가지고 있는 함수
// 인자: 이전 state, action(명령과 작업에 필요한 데이터)
// 리턴값: 새로운 state
function reducer(currentState, action) {
  
  // state 복제본 생성
  // 1. react는 이전 state를 유지하려는 성격이 있음
  // 2. object는 주소값을 가지고 잇기 때문에 값을 수정해도 변화가 없음
  const newState = {...currentState};
  
    if(action.type === 'PLUS') {
      // newState는 여러건이기때문에 특정 state를 꺼내야함!
      newState.num++;  //state값 변경
    }

  return newState;
}

// 스토어 생성
// 리듀서함수, state의 초기값
const store = createStore(reducer, {num:1});

function App() {
  return (
    <div className='root'>
      {/* 3. Provider 설정 */}
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
    </div>
  );
}

export default App;