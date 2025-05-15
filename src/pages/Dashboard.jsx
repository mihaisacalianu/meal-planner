import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <section>
      <h1>Dashboard Page</h1>
      <Link to="/new">New Meal</Link>
    </section>
  )
}

export default Dashboard
