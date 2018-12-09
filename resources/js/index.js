import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App/App'
import {AuthorEdit, Authors} from './components/';
require('../sass/style.scss')
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

if (document.getElementById('root')) {
  ReactDOM.render(
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/:id/edit" component={AuthorEdit} exact={true} />
                  <Route path="/author" component={Authors} exact={true} />
                  <App />
              </Switch>
          </div>
      </BrowserRouter>,
      document.getElementById('root')
  );
}