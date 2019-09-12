import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import './styles/Common.scss';
//import './styles/RecipieDetails.scss';

import Loading from './components/Loading';

const RecipieListContainer = lazy(() => import('./containers/RecipeListContainer'));
const RecipieDetails = lazy(() => import ('./containers/RecipeDetailsContainer'));
const ErrorPage = lazy(() => import ('./components/ErrorPage'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={RecipieListContainer}></Route>
            <Route path="/recipe/:id" component={RecipieDetails}></Route>
            <Route component={ErrorPage}></Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
