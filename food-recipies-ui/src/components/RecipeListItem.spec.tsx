import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import { recipes } from '../test/testData';
import RecipeListItem from './RecipeListItem';
import { Link } from 'react-router-dom';
should();

Enzyme.configure({ adapter: new Adapter() });

describe("<RecipeListItem />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<RecipeListItem recipe={recipes[0]}></RecipeListItem>);
    })
    it('should contain recipe name ', () => {
        wrapper.find(".recipe-title").length.should.equal(1);
    });
    it('should contain recipe image ', () => {
        wrapper.find(".recipe-image").length.should.equal(1);
    });
    it('should contain contain a link with recipe id for detail page ', () => {
        wrapper.find(Link).length.should.equal(1);
        expect(wrapper.find(Link).props().to).toBe('/recipe/123');
    });
});