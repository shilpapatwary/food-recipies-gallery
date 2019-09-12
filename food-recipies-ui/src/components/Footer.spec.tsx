import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import Footer from './Footer';
should();

Enzyme.configure({ adapter: new Adapter() });

describe("<Footer />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<Footer />);
    })
    it('should contain a copyright section', () => {
        wrapper.find(".copyright").length.should.equal(1);
    });
    it('should have a footer section', () => {
        wrapper.find(".recipes-footer").length.should.equal(1);
    });
});