import React from 'react'
import SearchBar from './SearchBar'
import "./header.css"
import Logo from './Logo'
import Nav from './Nav'
import SlideBar from '../SlideBar/SideBar'
import Main from '../MainConten/Main'
const Header = () => {
  return (
    <>
        <header className="header fixed-top d-flex align-items-center">
          <Logo/>
          <SearchBar/>
          <Nav/>
       </header>
       <SlideBar/>
       <Main/>
    </>
  )
}

export default Header