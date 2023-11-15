'use client'
import {useHashStore} from "@/store/hashStore";
import {useEffect, useState} from "react";

export default function HashCount(){
    const countStore = useHashStore(state => state.count)

    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(countStore)
    }, [countStore])

    return (
    <>
      <h1 className='text-lg mb-3 font-bold'>HashCount</h1>
      <div>{count}</div>
    </>
  )
}