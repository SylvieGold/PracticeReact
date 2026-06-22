import React, { useContext } from 'react'
import { MiracleContext } from './ContextHolder'

const About = () => {
  let {theme} = useContext(MiracleContext)

  return (
    <div className={' h-screen duration-200 bg-mauve-600 grid place-items-center text-5xl ${theme ? " bg-mauve-200 text-black" : " bg-mauve-600 text-white" }'}>About</div>
  )
}

export default About