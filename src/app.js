import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { Loadphoto } from './pages'
import { Error, Navbar, Loading } from './components'
import ProtectedRoute from './auth/protected-route'

const Home = lazy(() => import('./pages/Home'))

const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div id="app">
      <Navbar />
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />

          <ProtectedRoute path="/Loadphoto" component={Loadphoto} />

          <Route path="/Error" component={Error} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
