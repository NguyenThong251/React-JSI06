import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
        </ul>
    </div>
  )
}
