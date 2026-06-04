import React, { useEffect, useState } from 'react'

function EffectClass() {
    let [count, setCount] = useState(0)

    let increaseCount =()=> setCount(count + 1)

    useEffect(()=>{
        console.log("Hello")
    }, []) // array of dependencies

  return (
    <div>
        <h1 className=' text-4xl font-bold'>{count}</h1>
        <button onClick={increaseCount} className=' bg-black text-white p-2 rounded-md'>click me</button>
    </div>
  )
}

export default EffectClass