// Topics 함수
import { Routes, Route, NavLink } from "react-router-dom";
import Topic from "./Topic";
import data from './data.json';


function Topics() {

  let lis = [];

  for(let t of data) {
    lis.push(
      <li key={t.id}><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>
    );
  }

  console.log(lis);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        {lis}
      </ul>

      <Routes>
        <Route path='/:topic_id' element={<Topic></Topic>}></Route>
      </Routes>

    </div>
  )
}

export default Topics;