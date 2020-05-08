import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ReactRouterGlobalHistory } from 'react-router-global-history';
// import { getSession } from './helpers/localStorageHelper';

const WelcomeScreen = lazy(() => import('./screens/WelcomeScreen'));

const ProtectedLayout = () => {
  // if (!getSession()) {
  //   return redirectToAuthLoginPage();
  // }

  return (
    <>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
      </Switch>
    </>
  );
};

// const PublicLayout = () => {
//   return (
//     <>
//       <Switch />
//     </>
//   );
// };

const App = () => {
  return (
    <HashRouter>
      <div>
        <ReactRouterGlobalHistory />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={ProtectedLayout} />
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
