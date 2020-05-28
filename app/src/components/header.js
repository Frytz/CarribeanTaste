import React from 'react';


export default function Header(props) {

    return(

        <nav>
            <img src={props.logoSRC} />
    <a src={props.linkRefs}>{props.linkTitle}</a>

        </nav>
    )
}