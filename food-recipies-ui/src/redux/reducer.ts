import { FoodRecipesState, FoodRecipesTypes } from "./types";
import { AnyAction } from "redux";

const initialState = {
  recipes: undefined,
  currentRecipe: undefined
};

const FoodRecipieReducer = (currentState: FoodRecipesState = initialState, action: AnyAction) => {
  switch (action.type) {
    case FoodRecipesTypes.GET_RECIPES_ASYNC:
      return getRecipesContentReducer(currentState, action);
    case FoodRecipesTypes.SET_CURRENT_RECIPE:
      return setCurrentRecipeReducer(currentState, action);
    case FoodRecipesTypes.GET_RECIPE_ASYNC:
      return getRecipeContentReducer(currentState, action);
    default:
      return currentState;
  }
};

function getRecipesContentReducer(currentState: FoodRecipesState, action: AnyAction) {
  const data = action.payload || action.data;
  return Object.assign({}, currentState, { recipes: data.recipes });
}

function setCurrentRecipeReducer(currentState: FoodRecipesState, action: AnyAction) {
  const id = action.payload.id || action.id;
  const currentRecipe = currentState.recipes && currentState.recipes.filter(recipe => recipe.sys.id === id)[0];
  return Object.assign({}, currentState, { currentRecipe: currentRecipe });
}

function getRecipeContentReducer(currentState: FoodRecipesState, action: AnyAction) {
  const data = action.data;
  return Object.assign({}, currentState, { currentRecipe: data });
}

export default FoodRecipieReducer;
