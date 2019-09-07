import React from 'react';
import Header from './Header';

interface SampleComponentProps {
    data: any
}
interface SampleComponentState {

}
export default class SampleComponent extends React.Component<SampleComponentProps, SampleComponentState>{
    constructor(props: SampleComponentProps) {
        super(props);
    }

    render(){
        return(
            <Header></Header>
        )
    }
}

