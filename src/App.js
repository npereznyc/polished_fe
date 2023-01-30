import { Routes, Route } from 'react-router-dom'
import './App.css';
import PolishList from './pages/PolishList';
import Reviews from './pages/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PolishList />}/>
        <Route path='/reviews' element={<Reviews/>} />
      </Routes>
    </div>
  );
}

export default App;
