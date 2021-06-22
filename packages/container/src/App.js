import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Marketing = lazy(() => import('marketing'));

const Home = () => <Link to='/marketing'>Marketing</Link>

const App = () => (
  <Suspense fallback={'Loading...'}>
    <BrowserRouter>
      <Switch>
        <Route path='/marketing' component={Marketing} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default App;