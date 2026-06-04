import React, { useRef, useState } from 'react'

function SalesApp() {
    let [price1, setPrice1] = useState("")
    let [cost1, setCost1] = useState("")
    let qty1 = useRef()

    let [price2, setPrice2] = useState("")
    let [cost2, setCost2] = useState("")
    let qty2 = useRef()

    let [price3, setPrice3] = useState("")
    let [cost3, setCost3] = useState("")
    let qty3 = useRef()

    let togglePrice2 =()=>{
        if (price2 == "") {
            setPrice2(5000)
        } else {
            setPrice2("")
        }
    }

    let forCost2 =()=>{
        setCost2(qty2.current.value * price2)
    }

    let togglePrice3 =()=>{
        if (price3 == "") {
            setPrice3(9000)
        } else {
            setPrice3("")
        }
    }

    let forCost3 =()=>{
        setCost3(qty3.current.value * price3)
    }

    let togglePrice =()=>{
        if (price1 == "") {
            setPrice1(2000)
        } else {
            setPrice1("")
        }
    }

    let forCost1 =()=>{
        setCost1(qty1.current.value * price1)
    }

    let [total, setTotal] = useState("$0")
    let forTotal =()=>{
        setTotal(Number(cost1) + Number(cost2) + Number(cost3))
    }

  return (
    <div className=' min-h-screen bg-gray-50 flex items-start justify-center pt-16'>
        <div className=' w-[70%] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
            <div className=' px-6 py-4 border-b border-gray-100'>
                <h2 className=' text-lg font-semibold text-gray-700 tracking-wide'>Sales</h2>
            </div>
            <table className=' w-full'>
                <thead>
                    <tr className=' bg-gray-50 text-xs uppercase tracking-wider text-gray-400'>
                        <th className=' px-6 py-3 text-left font-medium'>Item</th>
                        <th className=' px-6 py-3 text-left font-medium'>Quantity</th>
                        <th className=' px-6 py-3 text-left font-medium'>Price</th>
                        <th className=' px-6 py-3 text-left font-medium'>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=' border-t border-gray-100 hover:bg-gray-50 transition-colors'>
                        <td className=' px-6 py-3 flex items-center gap-2 text-gray-600'>
                            <input onClick={togglePrice} type="checkbox" className=' accent-indigo-500' />
                            Shoe
                        </td>
                        <td className=' px-6 py-3'><input type="number" ref={qty1} onInput={forCost1} className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                        <td className=' px-6 py-3'><input type="number" value={price1} disabled className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                        <td className=' px-6 py-3'><input type="number" value={cost1} disabled className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr className=' border-t border-gray-100 hover:bg-gray-50 transition-colors'>
                        <td className=' px-6 py-3 flex items-center gap-2 text-gray-600'>
                            <input onClick={togglePrice2} type="checkbox" className=' accent-indigo-500' />
                            Bag
                        </td>
                        <td className=' px-6 py-3'><input type="number" ref={qty2} onInput={forCost2} className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                        <td className=' px-6 py-3'><input type="number" value={price2} disabled className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                        <td className=' px-6 py-3'><input type="number" value={cost2} disabled className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr className=' border-t border-gray-100 hover:bg-gray-50 transition-colors'>
                        <td className=' px-6 py-3 flex items-center gap-2 text-gray-600'>
                            <input onClick={togglePrice3} type="checkbox" className=' accent-indigo-500' />
                            Watch
                        </td>
                        <td className=' px-6 py-3'><input type="number" ref={qty3} onInput={forCost3} className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                        <td className=' px-6 py-3'><input type="number" value={price3} disabled className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                        <td className=' px-6 py-3'><input type="number" value={cost3} disabled className=' w-20 border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-300' /></td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr className=' border-t border-gray-100 bg-gray-50'>
                        <td colSpan={4} className=' px-6 py-4 flex items-center gap-3'>
                            <button onClick={forTotal} className=' text-xs font-medium text-indigo-500 uppercase tracking-wider hover:text-indigo-700 transition-colors'>Total</button>
                            <span className=' text-2xl font-bold text-gray-700'>{total}</span>
                        </td>
                    </tr>
                </tfoot>

            </table>

        </div>

    </div>
  )
}

export default SalesApp