/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import ContentPage from './containers/ContentPage';
import ErrorPage from './containers/ErrorPage';
import HistoryPage from './containers/HistoryPage';
import HomePage from './containers/HomePage';
import TestPage from './containers/TestPage';

/*
// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" * / './containers/CounterPage')
);
*/

/*
const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);
*/

export default function Routes() {
  return (
    <App>
      <Switch>
        {/* <Route path={routes.COUNTER} component={CounterPage} /> */}
        <Route path={routes.TEST} component={TestPage} />
        <Route path={routes.HISTORY} component={HistoryPage} />
        <Route path={routes.CONTENT} component={ContentPage} />
        <Route path={routes.ERRORS} component={ErrorPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
