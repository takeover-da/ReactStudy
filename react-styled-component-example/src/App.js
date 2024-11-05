import './App.css';
import {Route, Routes, NavLink} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import styled from 'styled-components';

const Navbar = styled.nav`
  font-size: 25px;
`;

/*
<a>태그(App + 세부)
  링크를 클릭하면 request가 발생됨
  파일을 다시 불러옴 -> 모든 컴포넌트가 재생성됨

Link컴포넌트(세부)
  링크를 클릭해도 request가 발생되지 않음
  변경된 컴포넌트만 생성됨

속도: <a> < Link(<a>보다 Link가 빠르다.)
*/
function App() {
  return (

    <div>

      <Navbar>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/About'>About</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
        {/* <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Contact'>Contact</a></li>
        </ul> */}
      </Navbar>

      {/* Router는 주소에 따라 화면이 전환될떄 사용 */}
      {/* 조건: URL주소 */}
      {/* 리턴: 새로운 UI */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/*' element={<div style={{fontSize: '100px'}}>못 찾겠어용~</div>}></Route>
      </Routes>

    </div>
  );
}

export default App;