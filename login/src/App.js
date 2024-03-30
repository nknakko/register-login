import React , {useState} from 'react';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
function App() {

  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
    <Router>
      <Routes>
      
        <Route exact path='/' element={ user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>
        <Route path='/Login' element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>

    </Router>
            </div>
  );
}

export default App;
