
import './App.css';
import Quote from './Quote';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorite from './Favorite';
import Create from './Create';
import Explore from './Explore';
import { useLocation } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [quote, setQuote] = useState([])
  const [userQuotes, setUserQuotes] =useState([])
  const location = useLocation()
  const [favoriteQuoteData, setFavoriteQuoteData] = useState([])
  const [allQuotes, setAllQuotes] = useState([])

  useEffect(() => {
   
   fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
      .then((r) => r.json())
      .then(quote => {
        setQuote(quote)
      })
      
}, []);

// fetch('https://motivational-quote-api.herokuapp.com/quotes')
// .then(r => r.json())
// .then(setFavoriteQuoteData); 
  useEffect(() => {
    fetch('https://motivational-quote-api.herokuapp.com/quotes')
    .then(res => res.json())
    .then(data => setAllQuotes(data))
  }, [])



  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route exact path ='/' element={ <Quote quote={quote}/> } />
        <Route path='/create' element={ <Create allQuotes={allQuotes} 
        setAllQuotes={setAllQuotes}
        userQuotes={userQuotes} 
        setUserQuotes={setUserQuotes}/>} />
        <Route path='/explore' element={ <Explore allQuotes={allQuotes} 
        setAllQuotes={setAllQuotes} />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
