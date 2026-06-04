import React, { useEffect, useState } from 'react'

function FetchingData() {
    let [data, setData] = useState('');

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])


  return (
    <div className=' h-[210px] w-[150px] bg-slate-500 p-2'>
        <div className=' h-[150px] bg-sky-200 rounded-md p-2'>
            <img src={data.image} className=" h-[130px] w-full" />
        </div>
        <h3 className=' font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>{data.title}</h3>
        <p className=' text-[14px] font-medium'>&#8358;{data.price}</p>
    </div>
  )
}

export default FetchingData