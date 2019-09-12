import { FoodRecipesTypes, RecipeItem } from './types';
import { action } from 'typesafe-actions';

export const getRecipesAction = () =>  action(FoodRecipesTypes.GET_RECIPES);
export const getRecipesActionAsync = (recipes: Array<RecipeItem>) => action(FoodRecipesTypes.GET_RECIPES_ASYNC, {recipes});

export const getRecipeAction = (id: String) =>  action(FoodRecipesTypes.GET_RECIPE, { id });
export const getRecipeActionAsync = (recipe: RecipeItem) => action(FoodRecipesTypes.GET_RECIPE_ASYNC, {recipe});

export const setCurrentRecipeAction = (id: String) =>  action(FoodRecipesTypes.SET_CURRENT_RECIPE, { id });
