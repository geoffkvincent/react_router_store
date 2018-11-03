import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'

const App = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NoMatch} />
  </Fragment>
)

export default App