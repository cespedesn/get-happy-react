import React, { useState, useEffect } from 'react'
import ExploreCollection from './ExploreCollection'
import QuoteGrid from './QuoteGrid'

export default function Explore({allQuotes, setAllQuotes}) {
    const [searchTerm, setSearchTerm] = useState("")
    


    function handleSearch(e){
        setSearchTerm(e.target.value)
    }

    
    let keywordsToDisplay = allQuotes.filter((quote) => quote.author_id ? quote.text_content.toLowerCase().includes(searchTerm.toLowerCase()) : quote.quote.toLowerCase().includes(searchTerm.toLowerCase()))
    
   // searchTerm.toLowerCase().includes(quote.quote.toLowerCase())
    let quotesList = keywordsToDisplay.map((quote, index) =>  { 
    return <ExploreCollection 
        key= {`${index}-${quote.id}`}
        quote={quote}
        
        />   
    
    }
        )

   // const noRepeats = quotesList.filter((quote, index) => quotesList.indexOf(quote) == index)

  return (
    <div className='search-bar'>
       
      <input type='text' 
       placeholder='search...'
       value={searchTerm} 
       onChange={handleSearch}
       />
      <QuoteGrid className="explore"
       quotes={quotesList}
       />
      
    </div>
  )
}
