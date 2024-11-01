// Movie 함수
import { useParams } from "react-router-dom";
import movieData from "../movieData.json";


function Movie() {

  // localhost:3000/movie/1
  // 단건조회를 위해 URL에서 파라미터(movie id) 추출
  let params = useParams();

  // 배열의 find 함수로 해당 id와 일치하는 영화 데이터 찾기
  // find함수는 배열의 요소만큼 반복되면서 ture가 반환되면 요소가 추출됨
  let findMovie = movieData.find( (movie) => {
    if (movie.id === Number(params.movieId)) {
      return true;
    }
  });

  if (findMovie === undefined) {
    findMovie = {
      title: 'Sorry',
      description: 'Not found'
    };
  }

  return (
    <div>
      <h3>{findMovie.title}</h3>
      {findMovie.description}
      <div>
      <img src={findMovie.poster}></img>
      </div>
    </div>
  );
}

export default Movie;