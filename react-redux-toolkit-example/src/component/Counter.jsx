import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// +버튼과 숫자를 담은 UI 반환

const Counter = () => {

  const num = useSelector((state)=>{
    return state.num;
  });

  // redux 스토어에서 dispatch함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>{
        // 디스패치에 'UP'타입 액션을 전달
        // 버튼을 클릭하면 2만큼 증가
        dispatch({type:'UP', step:2});
      }}>+</button>
      {num}
    </div>
  )
}

export default Counter