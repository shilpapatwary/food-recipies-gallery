import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { FoodRecipesTypes } from '../redux/types';
import { getRecipesContent, getRecipeContent } from './apis';
import { AnyAction } from "redux";

export function* getRecipeAsync(recipeData: AnyAction) {
    const data = yield call(getRecipeContent, recipeData.payload.id);
    yield put({type: FoodRecipesTypes.GET_RECIPE_ASYNC, data});
}

function* watchGetRecipe() {
    yield takeEvery(FoodRecipesTypes.GET_RECIPE, getRecipeAsync)
}

export function* getRecipesAsync() {
    const data = yield call(getRecipesContent);
    yield put({type: FoodRecipesTypes.GET_RECIPES_ASYNC, data})
}

function* watchGetRecipes() {
    yield takeEvery(FoodRecipesTypes.GET_RECIPES, getRecipesAsync)
}

export default function* root() {
    yield fork(watchGetRecipes);
    yield fork(watchGetRecipe);
}