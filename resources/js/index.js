import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App/App'
import { AuthorEdit, PublisherEdit, BookEdit } from './components/';
require('../sass/style.scss')
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

if (document.getElementById('root')) {
  ReactDOM.render(
      <BrowserRouter>
          <div>
              <Switch>
                  <Route path="/author/:id/edit" component={AuthorEdit} exact={true} />
                  <Route path="/publisher/:id/edit" component={PublisherEdit} exact={true} />
                  <Route path="/book/:id/edit" component={BookEdit} exact={true} />
                  <App />
              </Switch>
          </div>
      </BrowserRouter>,
      document.getElementById('root')
  );
}