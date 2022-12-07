import './App.css';
import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Navigation from './Navigation';
import HomePage from './HomePage';
import TopCollections from './TopCollections';
import Playground from './Playground';
import Collections from './Collections';
import CollectionTable from './CollectionTable';
import CollectionReview from './CollectionReview';
import Wallet from './Wallet';
import Purgatory from './Purgatory';
import ReviewRender from './ReviewRender';
import ReviewList from './ReviewList';
import Waitlist from './Waitlist';
import Footer from './Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'

export const ThemeContext = createContext(false)

function App() {
const [currentUser, setCurrentUser] = useState(null)
const [theme, setTheme] = useState('light')


const toggleTheme = () => {
  setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
}



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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navigation setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route exact path='/' element= { <HomePage /> } />
          <Route exact path='/topcollections' element= { <TopCollections /> } />
          <Route path= '/login' element= { <Login /> } />
          <Route path= '/nftplayground' element= { <Playground /> } />
          <Route path= '/collectiontable' element= { <CollectionTable /> } />
          <Route path= '/collections' element= { <Collections /> } />
          <Route path= '/collectionreview' element= { <CollectionReview currentUser={currentUser}/> } />
          <Route path= '/collectiontable' element= { <ReviewRender currentUser={currentUser}/> } />
          <Route path= '/collectiontable' element= { <ReviewList /> } />
          <Route path= '/wallet' element= { <Wallet /> } />
          <Route path= '/purgatory' element= { <Purgatory /> } />
          <Route path= '/waitlist' element= { <Waitlist /> } />
          <Route path= '/' element= { <Footer /> } />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
