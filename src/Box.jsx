import React, { useRef, useState } from 'react'

function Box() {
    let inp = useRef()
    let [text, setText] = useState('hi')

    function coco() {
        setText(inp.current.value)
    }

  return (
    <div>
        <input ref={inp} type="text" className=' border-2'/>
        <button onClick={coco} className=' bg-black cursor-pointer text-white p-2 rounded-md'>click me</button>
        <p className=' p-3 bg-yellow-100'>{text}</p>
    </div>
  )
}

export default Box