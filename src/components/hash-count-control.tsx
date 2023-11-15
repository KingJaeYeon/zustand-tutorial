'use client'
import {useHashStore} from "@/store/hashStore";

export default function HashCountControl() {
    const [decrease, increase, reset] = useHashStore(state => [state.decrease, state.increase, state.reset])
    return (
            <div>
                <button onClick={()=>increase()}>+</button>
                <button onClick={()=>decrease()} style={{marginLeft: 12}}>
                    -
                </button>
                <button onClick={reset} style={{marginLeft: 12}}>
                    reset
                </button>
            </div>
    )
}