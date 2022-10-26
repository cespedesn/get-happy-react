import React, { useState, useEffect } from 'react'
import ExploreCollection from './ExploreCollection'
import QuoteGrid from './QuoteGrid'

export default function Explore() {
    const [searchTerm, setSearchTerm] = useState("")
    const [allQuotes, setAllQuotes] = useState([])


    function handleSearch(e){
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        fetch('https://motivational-quote-api.herokuapp.com/quotes')
        .then(res => res.json())
        .then(data => setAllQuotes(data))
    }, [])
   
    let keywordsToDisplay = allQuotes.filter((quote) => quote.quote.toLowerCase().includes(searchTerm.toLowerCase()))
    
   // searchTerm.toLowerCase().includes(quote.quote.toLowerCase())
    let quotesList = keywordsToDisplay.map((quote, index) =>  { 
    return <ExploreCollection 
        key= {`${index}-${quote.id}`}
        quote={quote.quote}
        author={quote.person}
        />   
    
    }
        )

   // const noRepeats = quotesList.filter((quote, index) => quotesList.indexOf(quote) == index)

  return (
    <div>
       
      <input type='text' 
       placeholder='search...'
       value={searchTerm} 
       onChange={handleSearch}
       />
      <QuoteGrid 
       quotes={quotesList}
       />
      
    </div>
  )
}
