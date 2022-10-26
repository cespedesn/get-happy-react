import React, { useState } from 'react'


export default function Create({userQuotes, setUserQuotes}) {
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
            setForm({...form, data})
            console.log(data)
          })
      }
console.log("damn dro")
       
  return (
    <div>
        {/* Create, this will be a form to make  a new quote */}
        <form className="new-quote-form" onSubmit={handleSubmit}>
            <input 
            placeholder="Author"
            value={form.person}
            name="person"
            onChange={handleChange}
            />
            <textarea 
            placeholder="Write your quote here..." 
            rows={10} 
            value={form.quote}
            name="quote"
            onChange={handleChange}
            />
            <input 
            type="submit" 
            value="Share your quote" />
        </form>
    </div>
  )
}
