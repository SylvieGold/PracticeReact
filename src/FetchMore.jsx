import React, { useEffect, useState } from 'react'

function FetchMore() {
    let [holdData, setHoldData] = useState()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setHoldData(data));
    }, [])

  return (
    <div className=' min-h-screen bg-[#151414] grid grid-cols-5 gap-2'>
        {
            holdData ?
            holdData.map((item)=>(
                <div className=' bg-slate-500 p-2'>
                    <div className=' h-[150px] bg-sky-200 rounded-md p-2'>
                        <img src={item.image} className=" h-[130px] w-full" />
                    </div>
                    <h3 className=' font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</h3>
                    <p className=' text-[14px] font-medium'>&#8358;{item.price}</p>
                </div>
            ))
            : ( <p className=' text-4xl animate-pulse'>Loading...</p> )
        }
    </div>
  )
}

export default FetchMore