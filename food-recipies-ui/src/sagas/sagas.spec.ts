import chai from "chai";
import { call } from "redux-saga/effects";
import { getRecipesAsync } from "./sagas";
import { getRecipesContent } from "./apis";

chai.should();

describe("sagas", () => {
  describe("get recipes content saga", () => {
    it("should call getRecipesContent API", () => {
      const getRecipesSaga = getRecipesAsync();
      const getRecipeContentSagaValue = getRecipesSaga.next().value || {};
      getRecipeContentSagaValue.should.deep.equal(call(getRecipesContent));
    });
  });
});
