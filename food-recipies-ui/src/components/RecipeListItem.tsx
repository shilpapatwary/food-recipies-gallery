import React from "react";
import { Link } from 'react-router-dom';
import { RecipeItem } from '../redux/types';

interface RecipeProps {
  recipe: RecipeItem  
}
const RecipeListItem: React.FC< RecipeProps > = (props: RecipeProps) => {
  const linkUrl = `/recipe/${props.recipe.sys.id}`;
  return (
    <li className="recipe-item">
      <Link to={linkUrl}>
        <div>
          <img alt="recipe" src={props.recipe.fields.photo.fields.file.url} className="recipe-image"></img>
        </div>
        <div className="recipe-title text--bold">
          {props.recipe.fields.title}
        </div>
      </Link>
    </li>
  );
};

export default RecipeListItem;
