import React, { useState } from 'react'


export default function Create({allQuotes, setAllQuotes}) {
    const [form, setForm] = useState({
        person: "",
        quote: ""
      })
    
      function handleChange(e){
      setForm({
         ...form, 
        [e.target.name]: e.target.value})
      }
    
      function handleSubmit(e){
        e.preventDefault()
        console.log(JSON.stringify(form))
        fetch("http://localhost:9292/quotes", {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
          },
          body: JSON.stringify(form)
        })
           .then(resp => resp.json())
          .then(data => {
            setForm({data,...form})
            setAllQuotes([...allQuotes, data])
          })
      }

       
  return (
    <div className = 'form-div'>
        
        <form className="new-quote-form" onSubmit={handleSubmit}>
            <input className = "author-input"
            placeholder="Author"
            value={form.person}
            name="person"
            onChange={handleChange}
            />
            <textarea className='textarea'
            placeholder="Write your quote here..." 
            rows={10} 
            value={form.quote}
            name="quote"
            onChange={handleChange}
            />
            <input className = 'submit-btn' 
            type="submit" 
            value="Share your quote" />
        </form>
    </div>
  )
}
