import './App.css';
import {Route, Routes, NavLink} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (

    <div>

      <nav>
        <ul>
          <li><NavLink to='/' href='/'>Home</NavLink></li>
          <li><NavLink to='/About'>About</NavLink></li>
          <li><NavLink to='/Contact'>Contact</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/*' element={'못찾았어용~'}></Route>
      </Routes>

    </div>
  );
}

export default App;
