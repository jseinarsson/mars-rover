import React, { useState } from 'react'

function Counter() {
    const [year, setYear] = useState(2000)
    
    if (year === 2021) {
        setYear(2000)
    }

    return (
        <h1 className="counter" onClick={() => setYear(prevYear => prevYear + 1)}>{year}</h1>
    )
}

export default Counter