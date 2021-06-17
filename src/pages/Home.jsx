
import React from 'react'
import { Header } from '../cmps/Header'
import { Hero } from '../cmps/Hero'
import { Desc } from '../cmps/Desc'
import { Results } from '../cmps/Results'
import { Contact } from '../cmps/Contact'
import { NavLink } from 'react-router-dom'
// import AccessTimeIcon from '@material-ui/icons/AccessTime';

export function Home() {
  return (
    <div >
      <Header />
      <main>
        {/* <AccessTimeIcon/> */}
        <Hero />
        <Desc />
        <Results />
        <Contact />
        <footer>
          <NavLink exact to="/"><h1 role="img" aria-label="logo">myteam</h1></NavLink>
          <div className="flex">
            <NavLink exact to="/"><p>home</p></NavLink>
            <NavLink exact to="/about"><p className="about">about</p></NavLink>
          </div>
        </footer>
      </main>
    </div >
  )
}


