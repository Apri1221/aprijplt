import React, { useState } from 'react'

function CounterExample() {
    let [count, setCount] = useState(10)

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h2 onClick={() => setCount(count++)}>
                Plus
            </h2>
        </div>
    )
}

export default CounterExample