import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { AnyAction, createStore } from 'redux';
import SampleContainer from './RecipieList';

import initialState from '../redux/test/initialState.json';
import { SampleReactTypes } from '../redux/types';

should();

Enzyme.configure({ adapter: new Adapter() });

describe('<SampleContainer/ >', function () {
    it('should render samples', function () {
        const reducer = sinon.fake((currState: any, action: AnyAction) => {
            return currState;
        });
        const state = JSON.parse(JSON.stringify(initialState));
        const store = createStore(reducer, state);
        const wrapper = mount(<Provider store={store}><SampleContainer></SampleContainer></Provider>);
        //reducer.calledTwice.should.be.true;
    });

    it('should dispatch sample action', function () {
        const reducer = sinon.fake((currState: any, action: AnyAction) => {

            if (action.type.indexOf('@@redux/INIT') === 0) {
                return currState;
            }
            action.type.should.contain(SampleReactTypes.SAMPLE_REACT_TYPE);
            return currState;
        });
        const state = JSON.parse(JSON.stringify(initialState));
        const store = createStore(reducer, state);
        const wrapper = mount(<Provider store={store}><SampleContainer /></Provider>);
        //wrapper.find('.channel-name').first().simulate('click');
        //reducer.callCount.should.equal(4);
    });
})