import React, { useState } from 'react'

// This is a counter that uses useState. I have grand ideas that you should be able to change the year and the images on the home page using this, but haven't gotten it to work yet and feel it may be a little bit too much for this particular guide return. Maybe in the future? But for now it's just a little novelty in the header...
function Counter() {
    const [year, setYear] = useState(2019)
    
    if (year === 2021) {
        setYear(2000)
    }

    return (
        <h1 className="counter" onClick={() => setYear(prevYear => prevYear + 1)}>{year}</h1>
    )
}

export default Counter