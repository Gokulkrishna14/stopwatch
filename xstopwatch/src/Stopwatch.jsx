import { useState } from "react"

export default function Stopwatch(){
    const[count , setCount] = useState(0);
    return (
        <div>
            <h1>Counter App</h1>
            <div>Count: {count}</div>
            <button onClick={() => setCount((prevCount) => prevCount+1)}>
                Increment
            </button>
            <button onClick={() => setCount((prevCount) => prevCount-1)}>
                Decrement
            </button>
        </div>
    )
};