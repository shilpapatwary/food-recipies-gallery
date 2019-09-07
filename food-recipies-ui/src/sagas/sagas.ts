import { takeEvery, put, call, fork } from 'redux-saga/effects';
import { FoodRecipiesTypes } from '../redux/types';
import { getSampleContent } from './apis';


export function* sampleContentAsync() {
    const data = yield call(getSampleContent);
    yield put({type: FoodRecipiesTypes.SAMPLE_REACT_TYPE_ASYNC, data})
}

function* watchSampleContent() {
    yield takeEvery(FoodRecipiesTypes.SAMPLE_REACT_TYPE, sampleContentAsync)
}

export default function* root() {
    yield fork(watchSampleContent);
}