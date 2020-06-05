import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {activeContContext} from '../contexts/activeContent';


export default function Header(props) {

    const cfData = useContext(activeContContext);

    return(

        <nav>
{ cfData.map((c) =>  (
<Link className="w3-btn" key={c.pageTitle} to={c.pageTitle} >{c.pageTitle}</Link>
))}
</nav> 


    )
}