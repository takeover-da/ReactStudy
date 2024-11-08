import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import Layout from './components/Layout';
import BoardList from './features/BoardList';
import BoardRegister from './features/BoardRegister';
import Register from './features/Register';
import BoardModify from './features/BoardModify';
import BoardDetail from './features/BoardDetail';
import Login from './features/Login';

// npm install react-router-dom

function App() {
  return (
    <>
      {/* 중첩 라우트 설정 */}
      {/* /를 최상위 부모 경로로 설정 */}

      {/* 중첩 라우트는 경로에 따라 부모와 자식 컴포넌트가 함께 렌더링 되는 구조
          ex: / => Layout 컴포넌트 + Home 컴포넌트
          ex: /register => Layout 컴포넌트 + Register 컴포넌트
      */}

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          {/* 게시물 관련 */}
          <Route path='/board/list' element={<BoardList/>}></Route>
          <Route path='/board/register' element={<BoardRegister/>}></Route>
          {/* :no => URL 안에 포함되어 있는 파라미터 */}
          {/* 이 자리에는 파라미터가 들어 올 수 있음 */}
          <Route path='/board/read/:no' element={<BoardDetail/>}></Route>
          <Route path='/board/modify/:no' element={<BoardModify/>}></Route>
        </Route>
      </Routes >
    </>
  );
}

export default App;