import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import Menu from './Menu';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<Menu />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<Menu></Menu>);
    })
    it('should contain two lists for menu items', () => {
        wrapper.find("ul").length.should.equal(2);
    });
    it('should contain a header menu', () => {
        wrapper.find(".header-menu").length.should.equal(1);
    });
});