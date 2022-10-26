import React from 'react'
import Card from "react-bootstrap/Card";

function ExploreCollection({ quote, author }) {
   
    // function handleInputChange (e) {
    //     setSearchTerm(e.target.value);
    // }

  return (
    <Card style={ { width: '12rem', margin: '1rem'}}>
        <Card.Body>
            <Card.Text>
               
                {quote}
                 <br/>
                 <br/>
                -{author}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
export default ExploreCollection;