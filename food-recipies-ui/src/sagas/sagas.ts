import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { FoodRecipesTypes } from '../redux/types';
import { getRecipesContent } from './apis';


export function* getRecipesAsync() {
    const data = yield call(getRecipesContent);
    yield put({type: FoodRecipesTypes.GET_RECIPES_ASYNC, data})
}

function* watchGetRecipes() {
    yield takeEvery(FoodRecipesTypes.GET_RECIPES, getRecipesAsync)
}

export default function* root() {
    yield fork(watchGetRecipes);
}