import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
require('../sass/style.scss')
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));