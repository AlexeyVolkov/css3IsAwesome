import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import Rain from './components/Rain/Rain'
import Bicycle from './components/Bicycle'
import Header from './components/Header/Header'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <main className='container bg-light border rounded-3'>
          <Switch>
            <Route path='/raintv'>
              <Rain />
            </Route>
            <Route path='/'>
              <Bicycle />
            </Route>
          </Switch>
        </main>
      </Router>
    </QueryClientProvider>
  )
}

export default App
