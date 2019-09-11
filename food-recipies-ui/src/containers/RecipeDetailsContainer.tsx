import React from "react";
import { FoodRecipesState } from "../redux/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setCurrentRecipeAction } from "../redux/actions";
import { RecipeItem } from "../redux/types";
import Header from '../components/Header';
import RecipieDetails from '../components/RecipeDetails';

interface RecipeDetailsProps {
  currentRecipe?: RecipeItem;
  match: any;
  setCurrentRecipeAction: any;
}
interface RecipeDetailsState {}

class RecipieDetailsContainer extends React.Component< RecipeDetailsProps, RecipeDetailsState > {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.setCurrentRecipeAction(params.id)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.currentRecipe && <RecipieDetails currentRecipe={this.props.currentRecipe} />}
      </React.Fragment>
    )
  }
}
function mapStateToProps(state: FoodRecipesState) {
  return {
    currentRecipe: state.currentRecipe
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentRecipeAction: (id: String) => {
      dispatch(setCurrentRecipeAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipieDetailsContainer);
