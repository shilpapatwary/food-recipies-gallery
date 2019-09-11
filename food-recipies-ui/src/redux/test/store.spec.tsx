import chai from "chai";
import store from ".";
import { setCurrentRecipeAction, getRecipesActionAsync } from "../actions";
import { recipes } from "../../test/testData";
import { RecipeItem } from "../types";
chai.should();

describe("Food Recipes Store", () => {
  describe("store.dispatch(getRecipesAction())", function() {
    it("should get recipes content", () => {
      const oldRecipesContent = store.getState().recipes || {};
      oldRecipesContent.should.be.empty;
      store.dispatch(getRecipesActionAsync(recipes));
      const newRecipesContent: Array<RecipeItem> =
        store.getState().recipes || [];
      newRecipesContent.should.not.be.empty;
      expect(newRecipesContent.length).toBe(1);
    });
  });
  describe("store.dispatch(setCurrentRecipeAction())", function() {
    it("should set current recipe", () => {
      const oldCurrentRecipe = store.getState().currentRecipe || {};
      oldCurrentRecipe.should.be.empty;
      store.dispatch(setCurrentRecipeAction("123"));
      const newCurrentRecipeContent = store.getState().currentRecipe || {};
      newCurrentRecipeContent.should.not.be.empty;
      newCurrentRecipeContent.should.have.property("fields");
      newCurrentRecipeContent.should.have.property("sys");
    });
  });
});

