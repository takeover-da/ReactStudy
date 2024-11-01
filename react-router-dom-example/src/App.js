import './App.css';
import {Route, Routes, NavLink} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Topics from './component/Topics';




function App() {
  return (

    <div>
      <h1>Hello React Router DOM</h1>

      <ul>
        <li><NavLink to='/' href='/'>Home</NavLink></li>
        <li><NavLink to='/Topics'>Topics</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Topics/*' element={<Topics></Topics>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/*' element={'Not found'}></Route>
      </Routes>

    </div>

  );
}

export default App;
