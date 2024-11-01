import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

// NavLink: Link 컴포넌트에 부가기능이 추가됨

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

// 데이터를 사용하여 컴포넌트를 자동으로 생성하기!
// topics 리스트 생성 (table에 저장된 데이터)
let topics = [
  {id: 1, title: 'HTML', description: 'HTML is ...'},
  {id: 2, title: 'JS', description: 'JS is ...'},
  {id: 3, title: 'React', description: 'React is ...'}
];

// Topic 상세화면을 반환하는 컴포넌트
function Topic() {
  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  )
}

// 하위 메뉴 추가
function Topics() {

  // Link 목록을 저장할 배열
  let lis = [];

  // 데이터를 사용하여 Link를 동적으로 생성
  for(let t of topics) {
    lis.push(
      <li><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>
    );
  }

  console.log(lis);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        {lis}
      </ul>

      {/* 하위 라우터 추가 */}
      {/* 자식 라우터는 부모의 url(경로)을 자동으로 포함 */}
      {/* <Routes>
        <Route path='/1' element={'HTML is ...'}></Route>
        //  /Topics 자동 추가됨! 추가 안해도되용~ 
        <Route path='/2' element={'JS is ...'}></Route>
        <Route path='/3' element={'React is ...'}></Route>
      </Routes> */}

      {/* Route를 하나로 통합 */}
      {/* URL에 포함된 파라미터로 처리 */}
      {/* 예: /topics/1 => (toipc_id = 1) */}
      <Routes>
        <Route path='/:toipc_id' element={<Topic></Topic>}></Route>
      </Routes>

    </div>
  )
}

function Contact() {
  return (
    <div>
        <h2>Contact</h2>
        Contact...
      </div>
  )
}

// 전체 UI를 반환하는 함수
function App() {
  return (

    <div>
      <h1>Hello React Router DOM</h1>

      {/* Link -> NavLink */}
      <ul>
        <li><NavLink to='/' href='/'>Home</NavLink></li>
        <li><NavLink to='/Topics'>Topics</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
      </ul>

      {/* a태그: 파일을 다시 로드하면서 request가 발생됨 */}
      {/* Link컴포넌트: 기존 index.html에 필요한 컴포넌트만 다시 생성함. request 발생안됨 */}

      {/* Link컴포넌트를 사용하면 페이지 전환 속도가 빨라진다. */}

      {/* url결로와 컴포넌트 설정 */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* /*는 하위 경로도 포함한다는 의미 */}
        <Route path='/Topics/*' element={<Topics></Topics>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        {/* 존재하지 않는 경로를 호출하면 'Not Found'를 표시 */}
        <Route path='/*' element={'Not found'}></Route>
      </Routes>

    </div>

  );
}

// 라우트 기능을 활성화하기 위해, BrowserRouter로 최상위 컴포넌트를 감싸기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
