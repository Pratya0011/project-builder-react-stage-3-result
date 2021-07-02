import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container">
            <div><h3>Quiz App</h3></div>
            <div><button><Link to='/Quiz'>Play</Link></button></div>
        </div>
    )
}
