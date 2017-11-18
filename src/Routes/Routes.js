import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '/Components/App'
import User from '/Components/User'

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='user/:username' component={User} />
      </div>
    </BrowserRouter>
  )
}

export default Routes;