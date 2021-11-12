import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Loadphoto from './pages/Loadphoto'
import Header from './components/Navbar'
import Error from './components/Error'

const App = () => {
  return (
    <div id="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Loadphoto">
          <Loadphoto />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  )
}

export default App
