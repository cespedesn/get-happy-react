
import './App.css';
//import { Routes } from "react-router-dom"

// import { Routes, Route } from "react-router-dom"

import Quote from './Quote';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorite from './Favorite';
import Create from './Create';
import Explore from './Explore';
import { useLocation } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [quote, setQuote] = useState([])
  const [userQuotes, setUserQuotes] =useState([])
  const location = useLocation()
  const [favoriteQuoteData, setFavoriteQuoteData] = useState([])

  useEffect(() => {
   
   const request = fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
      .then((r) => r.json())
      .then(quote => quote);
      request.then( quote => { 
        return fetch("http://localhost:9292/quotes", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(quote)
      }).then((r) => r.json())
      .then(quote => {
      setQuote(quote)
      console.log(quote, "over here man")})
    })
    
}, [location.key]);

const favoriteTileData = fetch('https://motivational-quote-api.herokuapp.com/quotes')
.then(r => r.json())
.then(setFavoriteQuoteData); 


  return (
    <div className="App">
    
     <NavBar />
     <Routes>
      <Route path="/favorite" element={<Favorite />} />
      <Route exact path ='/' element={ <Quote quote={quote}/> } />
      <Route path='/create' element={ <Create userQuotes={userQuotes} setUserQuotes={setUserQuotes}/>} />
      <Route path='/explore' element={ <Explore />} />
     </Routes>
    </div>
  );
}

export default App;
