import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <h1><FaBeer className='icons' /> Home </h1>
            <Link to={'/blog'} >blog</Link> ||
            <Link to={'/zig-zag'} >zig-zag</Link>
        </div>
    )
}

export default Home