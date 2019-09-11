import React from 'react';
import RecipeListItem from './RecipeListItem';
import { RecipeItem} from '../redux/types';

interface RecipeListProps {
    recipes: Array<RecipeItem>
}

export default class RecipeList extends React.Component<RecipeListProps, any> {
    render(){
        return(
            <div className="recipe-list">
                <ul className="flex flex-wrap justify-space-between">
                    {this.props.recipes && this.props.recipes.map((recipe) => {
                        return <RecipeListItem key={recipe.sys.id} recipe={recipe}/>
                    })}
                </ul>
            </div>
        )
    }
}

