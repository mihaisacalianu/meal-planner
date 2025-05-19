import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <section className=''>
      <h1>Dashboard Page</h1>
      <Link to="/new" className='bg-green-500 p-2 rounded-md text-white'>New Meal</Link>
    </section>
  )
}

export default Dashboard
