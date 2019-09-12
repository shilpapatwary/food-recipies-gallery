import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { should } from 'chai';
import { recipes } from '../test/testData';
import PageLayout from './PageLayout';
import Header from './Header';
import Footer from './Footer';
import RecipeList from './RecipeList';

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<FoodRecipesHome />", () => {
    let wrapper: any;
    beforeAll(() => {
        wrapper = shallow(<PageLayout content={<RecipeList recipes={recipes}></RecipeList>}></PageLayout>);
    })
    it('should contain a Header component', () => {
        wrapper.find(Header).length.should.equal(1);
    });
    it('should contain a Footer component', () => {
        wrapper.find(Footer).length.should.equal(1);
    });
    it('should contain RecipeList Component ', () => {
        wrapper.find(RecipeList).length.should.equal(1);
    });
});