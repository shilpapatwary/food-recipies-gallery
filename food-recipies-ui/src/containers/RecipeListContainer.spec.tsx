import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { AnyAction, createStore } from 'redux';

import RecipeListContainer from './RecipeListContainer';

import initialState from '../redux/test/initialState.json';
import { FoodRecipesTypes } from '../redux/types';

should();

Enzyme.configure({ adapter: new Adapter() });

describe('<RecipeListContainer/ >', function () {
    it('should render recipes', function () {
        const reducer = sinon.fake((currState: any, action: AnyAction) => {
            return currState;
        });
        const state = JSON.parse(JSON.stringify(initialState));
        const store = createStore(reducer, state);
        shallow(<Provider store={store}>
            <RecipeListContainer></RecipeListContainer></Provider>);
        reducer.calledOnce.should.be.true;
    });

    it('should dispatch get recipes action', function () {
        const reducer = sinon.fake((currState: any, action: AnyAction) => {

            if (action.type.indexOf('@@redux/INIT') === 0) {
                return currState;
            }
            action.type.should.contain(FoodRecipesTypes.GET_RECIPES);
            return currState;
        });
        const state = JSON.parse(JSON.stringify(initialState));
        const store = createStore(reducer, state);
        shallow(<Provider store={store}><RecipeListContainer /></Provider>);
        reducer.callCount.should.equal(1);
    });
})