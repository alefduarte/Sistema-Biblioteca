import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Books, Publishers, Authors, About } from './'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route path='/book' component={Books}/>
      <Route path='/publisher' component={Publishers}/>
      <Route path='/author' component={Authors}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
