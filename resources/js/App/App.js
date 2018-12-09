import React from 'react'
import { Main, Footer } from '../components/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


library.add(faStroopwafel)

const App = () => (
  <div>
    <Main />
    <Footer />
  </div>
)

export default App
