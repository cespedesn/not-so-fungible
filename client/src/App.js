import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Navigation from './Navigation';
import HomePage from './HomePage';


function App() {
const [currentUser, setCurrentUser] = useState(null)



//For auto login
useEffect(() => {
  fetch('/me')
  .then(res => {
    if(res.ok){
      res.json().then(setCurrentUser)
    }
  })
},[])

if (!currentUser) return <Login setCurrentUser={setCurrentUser}/>
  return (
    <div className="App">
      <Navigation setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route exact path='/' element= { <HomePage /> } />
        <Route path= '/login' element= { <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
