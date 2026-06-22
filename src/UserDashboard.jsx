import React from 'react'
import { useLocation } from 'react-router-dom'

function UserDashboard() {
    let location = useLocation()
    console.log(location)

  return (
    <div className=' h-screen flex gap-1'>
        <nav className=' bg-pink-400 w-[20%] flex items-center justify-center'>
            <ol className=' flex gap-2.5 flex-col font-bold'>
                <li>Profile</li>
                <li>Settings</li>
                <li><button className=' p-2 px-6 bg-red-500 text-white rounded-md'>Logout</button></li>
            </ol>
        </nav>
        <main className=' flex-1 bg-mauve-500 p-3'>
            <h1 className=' text-white text-3xl'>Welcome back <span className=' italic font-bold text-black'>{location.state}</span></h1>
        </main>
    </div>
  )
}

export default UserDashboard