import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Navigation from './Navigation';
import HomePage from './HomePage';
import Playground from './Playground';
import Collections from './Collections';
import CollectionTable from './CollectionTable';
import CollectionReview from './CollectionReview';
import Wallet from './Wallet';
import Purgatory from './Purgatory';
import ReviewRender from './ReviewRender';
import ReviewList from './ReviewList';
import AOS from 'aos'
import 'aos/dist/aos.css'






function App() {
const [currentUser, setCurrentUser] = useState(null)

// For animation. Best to place here in parent level component
useEffect(() => {
  AOS.init({duration: 1000})
}, [])

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
        <Route path= '/nftplayground' element= { <Playground /> } />
        <Route path= '/collectiontable' element= { <CollectionTable /> } />
        <Route path= '/collections' element= { <Collections /> } />
        <Route path= '/collectionreview' element= { <CollectionReview currentUser={currentUser}/> } />
        <Route path= '/collectiontable' element= { <ReviewRender /> } />
        <Route path= '/collectiontable' element= { <ReviewList /> } />
        <Route path= '/wallet' element= { <Wallet /> } />
        <Route path= '/purgatory' element= { <Purgatory /> } />
      </Routes>
    </div>
  );
}

export default App;
