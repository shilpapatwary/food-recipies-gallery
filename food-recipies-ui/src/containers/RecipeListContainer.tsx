import React from 'react';
import { FoodRecipesState } from '../redux/types';
import { getRecipesAction } from '../redux/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PageLayout from '../components/PageLayout';
import RecipeList from '../components/RecipeList';
import '../styles/RecipieList.scss';
import Loading from '../components/Loading';

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
      <React.Fragment>
        {this.props.recipes ? <PageLayout content={<RecipeList recipes={this.props.recipes}></RecipeList>}></PageLayout> : <Loading />}
      </React.Fragment>
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
