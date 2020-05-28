import React from 'react';


export default function Header(props) {




   
    return(

        <nav>
 

<button key={props.pageTitle} >{props.pageTitle}</button>


</nav>


    )
}