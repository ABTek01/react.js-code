import React from 'react'
import {useState} from 'react'

export default function CounterComp() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(
            prevCount => prevCount + 1
        )
    }

    function decrement(){
        setCount(
            prevCount => prevCount - 1
        )
    }

    return (
        <div>
            <div style={{
                border:'solid green 10px',
                width:50,
                textAlign:'center',
                margin:'auto',
                marginTop:15
            }}>
                <h1>{count}</h1>
            </div>
            <br/>
            <button onClick={increment}>
                Increment
            </button>
            <hr/>
            <button onClick={decrement}>
                Increment
            </button>
        </div>
    )
}
