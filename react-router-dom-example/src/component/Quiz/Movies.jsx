// Movies 함수
import { NavLink } from "react-router-dom";
import movieData from '../movieData.json';


function Movies() {

  let lis = [];

  // json 데이터를 사용하여 링크 목록을 생성
  for (let m of movieData) {
    lis.push(
      <li key={m.id}><NavLink to={`/movie/${m.id}`}>{m.title}</NavLink></li>
    );
  }

  return (
    <div>
      <h2>Movies List</h2>

      <ul>
        {lis}
      </ul>

    </div>
  )
}

export default Movies;