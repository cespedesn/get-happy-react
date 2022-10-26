import React, { useEffect, useState } from 'react'
import FavoriteList from './FavoriteList'

export default function Favorite() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {fetch("http://localhost:9292/favorite")
   .then(r => r.json())
   .then(favorite => setFavorites(favorite) )
}, [])


function handleDelete(id){
    fetch(`http://localhost:9292/favorite/${id}`, {
    method: "DELETE"})
    const newFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(newFavorites)
}

  return (
    <div>Favorite
        <FavoriteList favorites={favorites} handleDelete={handleDelete}/>
    </div>
  )
}
