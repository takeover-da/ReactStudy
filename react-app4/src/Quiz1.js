import logo from './logo.svg';
import './App.css';

function Item() {
  return(
    <p>Item Component</p>
  );
}

function App() {
  return (
    <div>

      <h1>Item List</h1>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      
    </div>
  );
}

export default App;
