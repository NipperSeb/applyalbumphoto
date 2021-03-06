import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import './style/GlobalStyles.scss'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
