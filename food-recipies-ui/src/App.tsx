import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import './styles/RecipieList.scss';
import './styles/RecipieDetails.scss';

const RecipieListContainer = lazy(() => import('./containers/RecipeListContainer'));
const RecipieDetails = lazy(() => import ('./containers/RecipeDetailsContainer'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/" component={RecipieListContainer}></Route>
            <Route path="/recipe/:id" component={RecipieDetails}></Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
