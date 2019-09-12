import React from "react";
import { FoodRecipesState } from "../redux/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setCurrentRecipeAction, getRecipeAction } from "../redux/actions";
import { RecipeItem } from "../redux/types";
import PageLayout from '../components/PageLayout';
import RecipeDetails from '../components/RecipeDetails';
import Loading from '../components/Loading';

import '../styles/RecipieDetails.scss';

interface RecipeDetailsProps {
  recipes? : Array<RecipeItem>;
  currentRecipe?: RecipeItem;
  match: any;
  setCurrentRecipeAction: any;
  getRecipeAction: any;
}
interface RecipeDetailsState {}

class RecipieDetailsContainer extends React.Component< RecipeDetailsProps, RecipeDetailsState > {
  componentDidMount() {
    const { match: { params } } = this.props;
    if(!this.props.recipes) {
      this.props.getRecipeAction(params.id);
    } else {
      this.props.setCurrentRecipeAction(params.id);
    }
    
  }

  render() {
    return (
      <React.Fragment>
        {this.props.currentRecipe ? <PageLayout content={<RecipeDetails currentRecipe={this.props.currentRecipe}></RecipeDetails>}></PageLayout> : <Loading></Loading>}
      </React.Fragment>
    )
  }
}
function mapStateToProps(state: FoodRecipesState) {
  return {
    recipes: state.recipes,
    currentRecipe: state.currentRecipe
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentRecipeAction: (id: String) => {
      dispatch(setCurrentRecipeAction(id));
    },
    getRecipeAction: (id: String) => {
      dispatch(getRecipeAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipieDetailsContainer);
