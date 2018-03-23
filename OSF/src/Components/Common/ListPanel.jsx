import { render } from 'react-dom';
import React from 'react';
// import Arrows from '../Widget/Arrows.jsx'
// import PageControl from '../Widget/PageControl.jsx'

export default class ListPanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {pageSize, pageNumber} = this.props;

        return (
            <ul>
                {this.props.children}
            </ul>
        );
    }
}