import { FoodRecipiesState, FoodRecipiesTypes } from "./types";
import { AnyAction } from "redux";

const initialState = {
  recipies: undefined,
  currentRecipie: undefined
};

const FoodRecipieReducer = (currentState: FoodRecipiesState = initialState, action: AnyAction) => {
  switch (action.type) {
    case FoodRecipiesTypes.SAMPLE_REACT_TYPE_ASYNC:
      return getSampleContentReducer(currentState, action);
    default:
      return currentState;
  }
};

function getSampleContentReducer(currentState: FoodRecipiesState, action: AnyAction) {
  const data = action.payload || action.data;
  return Object.assign({}, currentState, { data: data });
}

export default FoodRecipieReducer;
