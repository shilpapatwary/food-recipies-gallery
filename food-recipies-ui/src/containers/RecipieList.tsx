import React from 'react';
import { FoodRecipiesState } from '../redux/types';
import { sampleReactAction } from '../redux/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FoodRecipiesHome from '../components/FoodRecipiesHome';

interface RecipieListProps {
    recipies: any,
    sampleAction: any
}
interface RecipieListState {

}

class RecipieListContainer extends React.Component<RecipieListProps, RecipieListState>{
    constructor(props: RecipieListProps) {
        super(props);
    }

    render() {
        return(
            <FoodRecipiesHome data={this.props.recipies}></FoodRecipiesHome>
        )
    }
}
function mapStateToProps(state: FoodRecipiesState) {
    return {
      recipies: state.recipies,
      currentRecipie: state.currentRecipie
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
      return {
        sampleAction: () => { dispatch(sampleReactAction())}  
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RecipieListContainer);
