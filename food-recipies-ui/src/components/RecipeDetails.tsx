import React from 'react';
import { RecipeItem } from '../redux/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface RecipeDetailsProps {
    currentRecipe?: RecipeItem
}
interface RecipeDetailsState {

}
export default class RecipeDetails extends React.Component<RecipeDetailsProps, RecipeDetailsState> {
    render(){
        const photo = this.props.currentRecipe && this.props.currentRecipe.fields.photo.fields.file.url,
            tags = this.props.currentRecipe && this.props.currentRecipe.fields.tags,
            chef = this.props.currentRecipe && this.props.currentRecipe.fields.chef && this.props.currentRecipe.fields.chef.fields.name;

         return(
             <React.Fragment>
                 <div className="recipe-details-container flex">
                     <div className="recipe-details">
                         <div className="text-mega recipe-details-title">{this.props.currentRecipe && this.props.currentRecipe.fields.title}</div>
                         <div className="recipe-chef letter-spacing-large text--bold">{chef}</div>
                         <div className="recipe-tags">
                             <ul className="recipe-tags-list flex text--bold letter-spacing-large text-micro">
                                 {tags && tags.map((tag: any) => {
                                     return <li key={tag.sys.id} className="recipe-tag">{tag.fields.name}</li>
                                 })}
                             </ul>
                         </div>
                         <div className="recipe-description">
                             {this.props.currentRecipe && this.props.currentRecipe.fields.description}
                         </div>
                         <div className="recipe-favorite text--bold">
                             <span>Mark this Recipe as your favorite</span>
                             <FontAwesomeIcon className="recipe-heart-icon" icon={faHeart}></FontAwesomeIcon>
                         </div>
                     </div>
                     <div className="recipe-details-image-container">
                         <img alt="Recipe" src={photo} className="recipe-details-image" />
                     </div>
                 </div>
             </React.Fragment>
        ) 
    }
}

