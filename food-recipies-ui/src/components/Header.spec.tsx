import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import Header from './Header';
import { Link } from 'react-router-dom';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<Header />);
    })
    it('should contain a header ads section', () => {
        wrapper.find(".header_ads").length.should.equal(1);
    });
    it('should contain a logo', () => {
        wrapper.find(".logo").length.should.equal(1);
    });
    it('logo shoule have a link to home page', () => {
        wrapper.find(Link).length.should.equal(1);
        expect(wrapper.find(Link).props().to).toBe('/');
    });
});