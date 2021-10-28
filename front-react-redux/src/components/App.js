import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './NotFound'
import Home from '../pages/Home'
import Login from '../pages/Login'

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
)

export default App