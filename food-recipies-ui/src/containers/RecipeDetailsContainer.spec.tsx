import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { should } from "chai";
import sinon from "sinon";
import { Provider } from "react-redux";
import { AnyAction, createStore } from "redux";

import RecipeDetailsContainer from "./RecipeDetailsContainer";

import initialState from "../redux/test/initialState.json";
import { FoodRecipesTypes } from "../redux/types";

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<RecipeDetailsContainer/ >", function() {
  it("should dispatch set current recipes action", function() {
    const reducer = sinon.fake((currState: any, action: AnyAction) => {
      if (action.type.indexOf("@@redux/INIT") === 0) {
        return currState;
      }
      action.type.should.contain(FoodRecipesTypes.SET_CURRENT_RECIPE);
      return currState;
    });
    const state = JSON.parse(JSON.stringify(initialState));
    const store = createStore(reducer, state);
    shallow(
      <Provider store={store}>
        <RecipeDetailsContainer match={{}} />
      </Provider>
    );
    reducer.callCount.should.equal(1);
  });
});
