import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import { should } from "chai";
import { recipes } from "../test/testData";
import RecipeList from "./RecipeList";

should();

Enzyme.configure({ adapter: new Adapter() });

describe("<RecipeList />", () => {
  it("should contain list of recipes ", () => {
    const wrapper = shallow(<RecipeList recipes={recipes}></RecipeList>);
    wrapper.find(".recipe-list").length.should.equal(1);
  });
});
