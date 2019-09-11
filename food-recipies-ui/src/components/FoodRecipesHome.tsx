import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import { RecipeItem } from '../redux/types';

interface FoodRecipesHomeProps {
    recipes: Array<RecipeItem>
}

const FoodRecipesHome: React.FC<FoodRecipesHomeProps> = (props) => { 
    return (
        <React.Fragment>
            <Header></Header>
            <RecipeList recipes={props.recipes}></RecipeList>
        </React.Fragment>
    )
}

export default FoodRecipesHome;

