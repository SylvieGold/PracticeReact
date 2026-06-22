import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MiracleContext } from './ContextHolder'

const Header = () => {
  let {toggleTheme} = useContext(MiracleContext)

  return (
    <header className=' py-4 flex justify-around bg-slate-500 text-white items-center'>
        <h1 className=' text-3xl font-extrabold'>Logo</h1>
        <nav>
            <ol className=' flex gap-2.5'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ol>
        </nav>
        <div>
          <button onClick={toggleTheme} className=' bg-black text-white p-2 rounded-md cursor-pointer'>dark mode</button>
        </div>
    </header>
  )
}

export default Header