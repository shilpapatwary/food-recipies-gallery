import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { should } from "chai";
import { recipes } from "../test/testData";
import RecipeDetails from "./RecipeDetails";
should();

Enzyme.configure({ adapter: new Adapter() });

describe("<RecipeDetails />", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = shallow(
      <RecipeDetails currentRecipe={recipes[0]}></RecipeDetails>
    );
  });
  it("should contain recipe name ", () => {
    wrapper.find(".recipe-details-title").length.should.equal(1);
  });
  it("should contain recipe image", () => {
    wrapper.find(".recipe-details-image").length.should.equal(1);
  });
  it("should contain chef name", () => {
    wrapper.find(".recipe-chef").length.should.equal(1);
  });
  it("should contain tags", () => {
    wrapper.find(".recipe-tags").length.should.equal(1);
  });
  it("should contain recipe description", () => {
    wrapper.find(".recipe-description").length.should.equal(1);
  });
});
