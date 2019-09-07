import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import sinon from 'sinon';
import SampleComponent from './SampleComponent';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<SampleComponent />", () => {
    it('should dispatch sample action', () => {
        //const sampleAction = sinon.fake();
        const data1 = {'a': 1}
        const wrapper = mount(<SampleComponent data={data1}></SampleComponent>);
        //wrapper.find(".page__content_addAddressIcon").length.should.equal(1);
        //wrapper.find(".page__content_addAddressIcon").simulate("click");
        //sampleAction.calledOnce.should.be.true;
    });
});