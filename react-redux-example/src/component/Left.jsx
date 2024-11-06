// Left 함수
import { useSelector } from "react-redux";


// useSelector: 스토어 안에 있는 state를 가져오는 함수

export const Left1 = ()=>{

  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

const Left2 = ()=>{

  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

const Left3 = ()=>{

  // useSelector
  // redux 스토어의 state 중에서 num 꺼내기
  const num = useSelector(state=>state.num);

  return (
    <div>
      {/* 꺼낸 state 출력 */}
      <h1>Left3 : {num}</h1>
    </div>
  );
}