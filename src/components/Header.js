import React from 'react'
import Counter from './Counter'

function Header() {
    return (
        <header className="header">
            <h1 className="title">Space<span className="accentcolor">:</span></h1>
            <Counter />
        </header>
    )
}

export default Header