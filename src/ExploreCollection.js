import React from 'react'
import Card from "react-bootstrap/Card";

function ExploreCollection({ quote }) {
   
    // function handleInputChange (e) {
    //     setSearchTerm(e.target.value);
    // }

  return (
    
      <Card className ='explore-cards' style={ { width: '12rem', margin: '1rem'}}>
         <Card.Body className='outer-card'>
            <Card.Body className='inner-card'>
                <Card.Text className ="card-text">
                  
                    {quote.quote ? quote.quote : quote.text_content}
                    <br/>
                    <br/>
                    <br/>
                    -{quote.person ? quote.person : quote.author.name}
                </Card.Text>
            </Card.Body>
          </Card.Body>
      </Card>
    
  )
}
export default ExploreCollection;