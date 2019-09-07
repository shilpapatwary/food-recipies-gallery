import React from 'react';
import Header from './Header';

interface FoodRecipiesHomeProps {
    data: any
}
interface FoodRecipiesHomeState {

}
export default class FoodRecipiesHome extends React.Component<FoodRecipiesHomeProps, FoodRecipiesHomeState>{
    constructor(props: FoodRecipiesHomeProps) {
        super(props);
    }

    render(){
        return(
            <Header></Header>
        )
    }
}

