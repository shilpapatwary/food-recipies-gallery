import { createStore, applyMiddleware } from 'redux';
import FoodRecipieReducer from '../redux/reducer';
import initialState from '../assets/initialState.json';
import createSagaMiddleware from 'redux-saga';
import root from '../sagas/sagas';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(FoodRecipieReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

export default store;