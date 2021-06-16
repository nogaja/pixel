import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'


// import { UserDetails } from './pages/UserDetails'


export function App() {
  return (
    <div className="app">
      <Router>
   
        {/* <main> */}
          <Switch>

            <Route path="/" component={Home} />
          </Switch>
        {/* </main>
        <footer>
         
        </footer> */}
      </Router>
    </div>
  )
}

