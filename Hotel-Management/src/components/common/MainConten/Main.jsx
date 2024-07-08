import React from 'react'
import "./main.css"
import PageTitle from './PageTitle'
import DashBoard from './DashBoard'


const Main = () => {
  return (
    <main id="main" className="main">
        <PageTitle page='DashBoard' />
        <DashBoard/>
    </main>
  )
}

export default Main