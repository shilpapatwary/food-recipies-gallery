export enum FoodRecipiesTypes {
    SAMPLE_REACT_TYPE = '@@types/SAMPLE_REACT_TYPE',
    SAMPLE_REACT_TYPE_ASYNC = '@@types/SAMPLE_REACT_TYPE_ASYNC'
}

interface RecipieDetail {
    description: String,
    title: String,
    chef: String,
    photo: String,
    calories: Number
}

interface Recipie {
    title: String,
    id: String,
    photo: String
}

export interface FoodRecipiesState {
    recipies?: Array<Recipie>,
    currentRecipie? : RecipieDetail
}