import { render } from 'react-dom';
import React from 'react';
import QuickLinkList from '../../Components/Common/ListPanel.jsx';
import QuickLinkItems from '../../Components/QuickLink/Item.jsx';
import style from './style.less';

class QuickLink {
    constructor(id){
        this.Id = id;
    }

    show(args, debugArgs) {
        if(this.IsDebug) {
            args = this.loadDebug();
        }
        this.renderUI(args);
    }

    renderUI(args) {
        let items = args.data.map((item, index) => {
            let id = "qlLink"+index;
            return(<QuickLinkItems key={id} img={item.img} link={item.a} />);
        });
        render(
            (<div className='.osf-quicklink-WP'>
                <QuickLinkList children={items} />
            </div>),
            document.getElementById(this.Id)
        );
    }
}

global.QuickLink = QuickLink;

