import React from 'react';
import { FoodRecipesState } from '../redux/types';
import { getRecipesAction } from '../redux/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FoodRecipesHome from '../components/FoodRecipesHome';
import '../styles/RecipieList.scss';

interface RecipieListProps {
    recipes: any
    getRecipesAction: any
}
interface RecipieListState {

}

class RecipeListContainer extends React.Component< RecipieListProps, RecipieListState > {
  componentDidMount() {
    if (!this.props.recipes) {
      this.props.getRecipesAction();
    }
  }
  render() {
    return (
      <FoodRecipesHome recipes={this.props.recipes}/>
    );
  }
}
function mapStateToProps(state: FoodRecipesState) {
  return {
    recipes: state.recipes
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getRecipesAction: () => {
      dispatch(getRecipesAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer);
