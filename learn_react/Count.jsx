"use client"

import { useState } from "react"

export default function Counter () {

    const [count,setCount] = useState(0)
    return (
       <>
        <h1 className="text-4xl text-blue-500 font-bold pt-6 text-center">Counter App</h1>
        <h1 className="text-3xl text-green-500 font-medium pt-4 text-center">Value {count}</h1>
        <div className="flex gap-2 justify-center pt-4">
            <button className="border-2 border-black p-2 rounded-md cursor-pointer hover:bg-amber-500" onClick={()=> setCount(count+1)}>Increase</button>
            <button className="border-2 border-black p-2 rounded-md cursor-pointer hover:bg-amber-500" onClick={()=> setCount(count-1)}>Decrease</button>
            <button className="border-2 border-black p-2 rounded-md cursor-pointer hover:bg-amber-500" onClick={()=> setCount(0)}>Reset</button>
        </div>
       </>
    )
}