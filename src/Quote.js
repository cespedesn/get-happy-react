import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

export default function Quote({ quote }) {
   const [heartClick, setHeartClick] = useState(false)
   const [favorites, setFavorites] = useState([])


   function handleFavorite(){
      setHeartClick(heartClick => !heartClick)
      setFavorites(quote)
      console.log(quote)
      console.log(favorites)
     
      fetch(`http://localhost:9292/quotes/${quote.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify({user_id: 1})
      
    })

//    function handleDelete(quote){
//     console.log(quote)
//     fetch(`http://localhost:9292/quotes${quote}`, {
//       method: "DELETE"
//   })
  }
console.log(quote)
  return (
    // background img circle
    <div id='QuoteMain'> 
      <div id='boxAroundQuote'> 
       <div id='quoteDiv'>
         <h1>{quote.text_content}</h1>
       </div>
       
       <div id='buttonsBelowQuote'>
        <button 
          className={heartClick === true ? 'btn-success' :null}
          onClick={() => handleFavorite()}
          >< AiOutlineHeart /></button>
       </div>
      </div>
    </div>
  )
}