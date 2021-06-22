import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history'
import App from './App';

// const mount = (el) => {
//   ReactDOM.render(
//     <App />,
//     el,
//   );
// };

const AppWithHistory = ({ onNavigate, onParentNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  return <App history={history} />
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-dev-root');

  if (devRoot) {
    ReactDOM.render(<AppWithHistory />, devRoot);
  }
}

export default AppWithHistory;