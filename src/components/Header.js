import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <Link to={`/`}><h1 className="title">Space<span className="accentcolor">:</span></h1></Link>
            <Counter />
        </header>
    )
}

export default Header