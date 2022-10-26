import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosStar } from 'react-icons/io'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'

export default function NavBar() {
  return (
    <div id='NavBar'>
        <div className='NavButtons'>
        <Link to ='/favorite' >
          <button className='Button' > <IoIosStar /> </button>
        </Link>
        </div>

        <div className='NavButtons'>
        <Link to ='/create' >
          <button className='Button' > <BsPencilSquare /> </button>
        </Link>
        </div>

        <div className='NavButtons'>
        <Link to ='/' >
          <button className='Button' > <AiOutlineHome /> </button>
        </Link>
        </div>

        <div className='NavButtons'>
        <Link to ='/explore' >
          <button className='Button'> <BiSearchAlt /> </button>
        </Link>
        </div>

    </div>
  )
}
