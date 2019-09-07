import { FoodRecipiesTypes } from './types';
import { action } from 'typesafe-actions';

export const sampleReactAction = () =>  action(FoodRecipiesTypes.SAMPLE_REACT_TYPE)
export const sampleReactActionAsync = () => action(FoodRecipiesTypes.SAMPLE_REACT_TYPE_ASYNC)