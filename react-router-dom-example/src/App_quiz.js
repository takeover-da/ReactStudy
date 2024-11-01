import './App.css';
import {Route, Routes, NavLink} from 'react-router-dom';
import Home from './component/Quiz/Home';
import Movies from './component/Quiz/Movies';
import Movie from './component/Quiz/Movie';


function App() {
  return (

    <div>
      <ul>
        <li><NavLink to='/' href='/'>Home</NavLink></li>
        <li><NavLink to='/Movies'>Movies</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Movies' element={<Movies/>}></Route>
        <Route path='/Movie/:movieId' element={<Movie/>}></Route>
        <Route path='/*' element={'Not found'}></Route>
      </Routes>

    </div>

  );
}

export default App;
