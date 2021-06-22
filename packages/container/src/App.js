import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import Header from './components/Header';

const Marketing = lazy(() => import('marketing'));

const Home = () => <Link to='/marketing'>Marketing App</Link>

const Teste = ({ Component }) => {
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;

    if (pathname !== nextPathname) {
      history.push(nextPathname)
    }
  }

  return <Component onNavigate={onNavigate} onParentNavigate={() => console.log('parent')} />
}

const App = () => (
  <Suspense fallback={'Loading...'}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' render={() => <Teste Component={Marketing} />} />
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default App;