import React from 'react'

function AdminDash() {
  return (
    <div className=' h-screen flex gap-1'>
        <nav className=' bg-slate-400 w-[20%] flex items-center justify-center'>
            <ol className=' flex gap-5 flex-col font-bold'>
                <li>Profile</li>
                <li>Settings</li>
                <li>View Users</li>
                <li><button className=' p-2 px-6 bg-red-500 text-white rounded-md'>Logout</button></li>
            </ol>
        </nav>
        <main className=' flex-1 bg-black'></main>
    </div>
  )
}

export default AdminDash