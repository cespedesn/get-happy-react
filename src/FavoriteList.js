import React from 'react'
import FavoriteTile from './FavoriteTile'


function FavoriteList({ favorites, handleDelete }) {
    if(!favorites || favorites.length === 0 ){return null}
     const yourItems = favorites.map((favorite) => {
         return (
               <FavoriteTile
                 handleDelete={handleDelete}
                 key={favorite}
                 favorite={favorite}
                 
                 />
           )
       } )
     return (
         <div className='quoteGrid'>
          {yourItems}
         </div>
     )
   }
   export default FavoriteList