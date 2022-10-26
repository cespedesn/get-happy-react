import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'


// console.log(userid)
// console.log(user_id)

export default function FavoriteTile({favorite, handleDelete}) {
  return (
    <div className='favoriteCard'>
       <div>
         {favorite.text_content}
       </div>
       
       <div>
          <button onClick={() => handleDelete(favorite.id)}><FaRegTrashAlt /></button>
       </div>

    </div>
  )
}
