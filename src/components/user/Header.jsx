import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const logoImg = 'https://kittencave.com/cdn/shop/files/file.png?v=1726836331&width=135'
  return (
    <>
    <header className='px-20 shadow-md shadow-indigo-300'>
      
   
    <div className="flex justify-between items-center py-1 ">
      
        <div className="">
          <img src={logoImg} alt="" className='w-[70px]'/>
          {/* <h3>LOGO</h3> */}
        </div>
        <ul className='flex items-center gap-8'>
            <li className=''>
            <Link className='link' to="/">Home</Link>
            </li>
            <li>
            <Link className='link'  to="/about">Shop</Link>
            </li>
            <li>
            <Link className='link'  to="/about">About</Link>
            </li>
            <li>
            <Link  className='link' to="/about">Blog</Link>
            </li>
            
        </ul>

          <div className="">
        <ul className='flex items-center gap-5'>
            <Link to="/login" className='bg-indigo-600 text-white text-lg font-semibold px-8 py-[6px] rounded-lg transition ease-linear   hover:-translate-y-1 hover:bg-indigo-500 duration-300'>Login</Link>
            <Link to="/signup" className='bg-indigo-100 text-indigo-600 text-lg font-semibold px-8 py-[6px] rounded-lg transition ease-linear  hover:-translate-y-1 hover:bg-indigo-200 border border-indigo-600 duration-300'>Signup</Link>
        </ul>
          </div>
    </div>
    </header>
    </>
  )
}
