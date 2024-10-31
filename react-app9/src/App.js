import './App.css';
import { useState } from 'react';


function Header(props) {

  return (
    <header>
      <h1><a href='/' onClick={
        (event) => {
          event.preventDefault();
          props.onChangeMode();
        }
      }>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {

  const lis = [];

  for(let t of props.topics) {

    lis.push(<li key={t.id}>
      <a href={'/read/' + t.id} id={t.id} onClick={
      (event) => {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }
    }>
      {t.title}</a></li>);
  }

  return (
    <ol>
      {lis}
    </ol>
  );
}

function Article(props) {

  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

// 등록폼을 반환하는 컴포넌트
function Create(props) {

  return(
    <article>
      <h2>Create</h2>

      {/* submit버튼을 클릭하면 전달받은 이벤트함수를 실횅 */}
      <form onSubmit={
        (event) => {
          event.preventDefault();  //페이지 이동 방지
          
          // 폼 데이터 꺼내기
          const title = event.target.title.value;
          const body = event.target.title.value;
          props.onCreate(title, body);
        }
      }>
        <p>
          <input type='text' name='title' placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>
    </article>
  );
}

function App() {

  let [mode, setMode] = useState('WELCOME');
  let [id, setId] = useState(null);
  // 게시물을 등록할때 사용할 새로운 ID
  let [nextid, setNextid] = useState(4);

  let content = null;

  let [topics, setTopics] = useState([
      {id:1, title:'html', body:'html is ...'},
      {id:2, title:'css', body:'css is ...'},
      {id:3, title:'javascript', body:'javascript is ...'}
    ]);

  //
  // const topics = [
  //   {id:1, title:'html', body:'html is ...'},
  //   {id:2, title:'css', body:'css is ...'},
  //   {id:3, title:'javascript', body:'javascript is ...'}
  // ];

  if (mode === "WELCOME") {
    content = <Article title="WELCOME" body="Hello, Web"></Article>
  } else if(mode === "READ") {

    let title, body = null;

    for (let t of topics) {

      if (t.id === Number(id)) {  
        title = t.title;
        body = t.body;
      }
    }

    content = <Article title={title} body={body}></Article>

  } else if(mode === "CREATE") {
    // 모드가 create라면, 등록 컴포넌트를 반환
    // content = <Create></Create>

    // Create 컴포넌트에서 등록 버튼을 클릭하면 게시물이 등록되는 이벤트 추가
    content = <Create onCreate={
      (title, body) => {
        
        // 기존 배열을 복사하여 새로운 배열로 생성
        const newTopics = [...topics];

        let newTopic = {id:nextid, title:title, body:body}
        
        newTopics.push(newTopic);

        setTopics(newTopics);  //topics state를 업데이트/ 100번지에서 200번지로 이동???

        // 등록이 정상적으로 끝났으면 상세화면으로 이동
        setMode('READ');
        setId(nextid);

        // 다음 아이디를 1만큼 증가시키기
        setNextid(nextid + 1);

      }
    }>

    </Create>
  }

  return (
    <div>

      <Header title="Web" onChangeMode={
        () => {
          setMode('WELCOME');
        }
      }></Header>

      <Nav topics={topics} onChangeMode={
        (id) => {
          setMode('READ');
          setId(id);
        }
      }></Nav>

      {content}

      {/* 등록폼으로 이동하는 링크 */}
      <a href='/create' onClick={
        (event) => {
          event.preventDefault();  //다른 페이지로 이동하는 것을 방지
          setMode('CREATE');  //모드 전환
        }
      }>Create</a>
    </div>
  );
}

export default App;
