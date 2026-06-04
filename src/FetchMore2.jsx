import React, { useEffect, useState } from 'react'

function FetchMore2() {
    let [moreData, setMoreData] = useState()

    useEffect(()=>{
        fetch('https://food-backend-3xb1.onrender.com/restaurants')
        .then(response => response.json())
        .then(data => setMoreData(data));
    }, [])

  return (
    <div className=' min-h-screen bg-[#151414] grid grid-cols-3 gap-15'>
        {
            moreData ?
            moreData.map((item)=>(
                <div className=' bg-slate-500 p-2'>
                    <div className=' h-[150px] bg-sky-200 rounded-md p-2'>
                        <img src={item.image} className=" h-[130px] w-full" />
                    </div>
                    <h3 className=' font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</h3>
                    <p className=' text-[14px] font-medium'>{item.address}</p>
                </div>
            ))
            : ( <p className=' text-4xl animate-pulse'>Loading...</p> )
        }
    </div>
  )
}

export default FetchMore2