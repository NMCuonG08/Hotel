import React from 'react'
import { Link } from 'react-router-dom'
import ExistingRoom from '../room/ExistingRoom'

const Admin = () => {
  return (
    <section>
        <h2>Welcome to Admin Page</h2>
        <hr/>
      <ExistingRoom/>

    </section>
  )
}

export default Admin