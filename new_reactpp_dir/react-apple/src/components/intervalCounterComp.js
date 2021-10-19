import React from 'react'
import { useState, useEffect } from 'react'

export default function IntervalCounterComp() {
    const [count, interValCount] = useState(0)

    useEffect(()=>{
        const countId = setInterval(() => {
            interValCount(prevCount => prevCount + 1)
        }, 1000);
            return ()=> (
                clearInterval(countId)
            )
    }, [count])

    return (
        <div>
            <div style={{
                border:'solid red 10px',
                width:50,
                textAlign:'center',
                margin:'auto'
            }}>
                <h1>{count}</h1>
            </div>
            <h4>Automatic Incrementing</h4>
        </div>
    )
}
