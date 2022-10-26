import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import Card from "react-bootstrap/Card";

// console.log(userid)
// console.log(user_id)

export default function FavoriteTile({favorite, handleDelete}) {
  return (
    <Card style={ { width: '12rem', margin: '1rem'}}>
      <Card.Body>
        <Card.Text>
       
          {favorite.text_content}
          <br/>
          <br/>
          -{favorite.auhtor}
          <button onClick={() => handleDelete(favorite.id)}><FaRegTrashAlt /></button>
         </Card.Text>
      </Card.Body>
     </Card>
  )
}
