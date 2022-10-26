// import React, { useEffect, useState } from 'react'
// import {Routes, Route} from 'react-router-dom';
// import Keyword from './keyword'

// export default function Explore() {
//     const [keywords, setKeywords] = useState([])

//     useEffect(() => {
//         fetch("https://zenquotes.io/api/keywords")
//         .then((res) => res.json())
//         .then(data =>{
//           setKeywords(data)
//           })
//       },[])
//     console.log(keywords)

//     //const topKeywords = keywords.map((word) => <Keyword key={q}/> )
//     return (
//     <div>
//         <Routes >
//         {/* {KeywordMap} */}
//          <Route path='/keyword' element={<Keyword/>} />

//         </Routes>
        
//         Explorem contains key words that can be clicked
//     </div>
//   )
// }
