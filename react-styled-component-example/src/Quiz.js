import './App.css';
import {Route, Routes, NavLink} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import styled from 'styled-components';

const Navbar = styled.nav`
  font-size: 25px;
`;

function App() {
  return (

    <div>

      <Navbar>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/About'>About</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
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
