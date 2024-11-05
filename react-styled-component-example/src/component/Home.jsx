// Home 함수
import styled from "styled-components";


// (styled 방식으로) div 태그 생성
// tag 종류
const DivHome = styled.div`
background-color: skyblue;
`;

// 일반 방식으로 div태그 생성
// const HomeDiv = () => {

//   const style = {backgroundColor: 'aquamarine'}

//   return (
//     <div style={style}></div>
//   )
// }

function Home() {
  return (
    <DivHome>
      <h2>Home</h2>
      Home Page...
    </DivHome>
  ); 
}

// default 키워드를 사용하면 외부에서 다른이름으로 사용 가능
export default Home;