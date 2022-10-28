import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import Card from "react-bootstrap/Card";

// console.log(userid)
// console.log(user_id)

export default function FavoriteTile({favorite, handleDelete}) {
  return (
    <Card style={ { width: '12rem', margin: '3rem'}}>
      <Card.Body className='outer-card'>
        <Card.Body className='inner-card'>
          <Card.Text className ="card-text">
        
            {favorite.text_content}
            <br/>
            <br/>
            -{favorite.author?.name}
            <br/>
            <br/>
            <button onClick={() => handleDelete(favorite.id)}><FaRegTrashAlt /></button>
          </Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  )
}
