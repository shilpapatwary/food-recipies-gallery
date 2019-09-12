export enum FoodRecipesTypes {
  GET_RECIPES = "@@types/GET_RECIPES",
  GET_RECIPES_ASYNC = "@@types/GET_RECIPES_ASYNC",
  GET_RECIPE = "@@types/GET_RECIPE",
  GET_RECIPE_ASYNC = "@@types/GET_RECIPE_ASYNC",
  SET_CURRENT_RECIPE = "@@types/SET_CURRENT_RECIPE"
}
export interface Recipe {
  title?: String;
  photo?: any;
  tags?: any;
  chef? : any;
  description: String;
}

export interface RecipeItem {
  fields: Recipe;
  sys: any;
}
export interface FoodRecipesState {
  recipes?: Array<RecipeItem>;
  currentRecipe?: RecipeItem;
}
