// Home 함수
import styled from "styled-components";


// (styled 방식으로) div 태그 생성
// tag 종류
const DivHome = styled.div`
background-color: skyblue;
`;

function Home() {
  return (
    <DivHome>
      <h2>Home</h2>
      Home Page...
    </DivHome>
  ); 
}

export default Home;