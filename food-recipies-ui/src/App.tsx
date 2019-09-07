import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./styles/App.scss";

const RecipieListContainer = lazy(() => import('./containers/RecipieList'));
const RecipieDetails = lazy(() => import ('./containers/RecipieDetails'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/"><RecipieListContainer/></Route>
            <Route path="/about"><RecipieDetails /></Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
