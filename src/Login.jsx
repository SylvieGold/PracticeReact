import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    let [formData, setFormData] = useState({
        userName: "Johnny",
        email: "",
        password: "",
        role: "user"
    });

    let navigate = useNavigate();

    let handleChange = (obi) => {
        // console.log('${obi.target.name} : ${obi.target.value}');
        setFormData({...formData, [obi.target.name]:obi.target.value}) //...spread operator
    };


    let handleSubmit =(e)=>{
        e.preventDefault()
        // console.log("Data Submitted: ", formData)

        if (formData.role == "admin") {
            navigate('/admin-d')
        } else {
            navigate('/user-d', {state: formData.userName})
        }
    }

  return (
    <div className=' grid place-items-center h-screen bg-mauve-800 content-center gap-2.5'>
        <h1 className=' text-3xl font-bold text-gray-200'>Login</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-2.5'>
            <label className=' flex text-white font-medium flex-col gap-1.5'>
                Email :
                <input onChange={handleChange} type="email" name="email" className=' text-black focus:outline-0 bg-white p-3 w-[300px]'/>
            </label>
            <label className=' flex text-white font-medium flex-col gap-1.5'>
                Password :
                <input onChange={handleChange} type="password" name="password" className=' text-black focus:outline-0 bg-white p-3 w-[300px]'/>
            </label>
            <button className=' bg-white w-[300px] py-3 font-bold cursor-pointer mt-5'>Submit</button>
        </form>
    </div>
  )
}

export default Login