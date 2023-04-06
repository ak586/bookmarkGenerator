import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
          
          <Link to='/' style={{fontWeight:500}}>Home</Link>
          <Link to='/bookmarks'>Bookmarks</Link>
    </nav>
  )
}

export default Navbar