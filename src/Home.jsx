import React, { useContext } from 'react'
import { MiracleContext } from './ContextHolder'

const Home = () => {
    let {theme} = useContext(MiracleContext)

  return (
    <div className={' h-screen grid duration-300 place-items-center text-5xl ${theme ? " bg-sky-300" : " bg-sky-700" }'}>Home</div>
  )
}

export default Home