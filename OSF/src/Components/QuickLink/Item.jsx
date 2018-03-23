import { render } from 'react-dom';
import React from 'react';

export default class QuickLinkItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let {img, link} = this.props;
        return (<li>
                    <div>
                        <img src={img.src} alt={img.alt}></img>
                    </div>
                    <div>
                        <a href={link.url}>{link.text}</a>
                    </div>
                </li>);
    }
}