import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Welcome-page/Login';
import Signup from './Components/Welcome-page/Signup';
import Landing from './Components/Main/Landing';
import Notfound from './Components/Landing-page/Notfound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/not-found' element={<Notfound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
