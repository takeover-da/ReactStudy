import logo from './logo.svg';
import './App.css';


// 일반함수
// 사용자정의함수 - 컴포넌트: html태그를 만들어서 반환
function Header() {
  return (
    <header>
      <h1><a href='/'>React</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <ol>
      <li><a href='/read/1'>html</a></li>
      <li><a href='/read/2'>css</a></li>
      <li><a href='/read/3'>js</a></li>
    </ol>
  );
}

function Article() {
  return(
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>

      <Header></Header>
      <Header></Header>
      <Header></Header>
      {/* <header>
        <h1><a href='/'>Web</a></h1>
      </header> */}


      <Nav></Nav>
      {/* <ol>
        <li><a href='/read/1'>html</a></li>
        <li><a href='/read/2'>css</a></li>
        <li><a href='/read/3'>js</a></li>
      </ol> */}


      <Article></Article>
      {/* <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article> */}

    </div>
  );
}

export default App;
