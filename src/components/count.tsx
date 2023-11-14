'use client'

import {dec, inc, setText, useCountStore} from "@/store/countStore";

export default function Count() {
    const { count, text } = useCountStore();
    return (
            <div className="counter">
                <div>{count}</div>
                <div>{text}</div>
                <button onClick={()=>inc(2)}>one up</button>
                <button onClick={()=>dec(2)}>one down</button>
                <button onClick={()=>setText('fuck you')}>change text</button>
            </div>
    )
}