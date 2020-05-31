import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { content } from '../data/content';


export default function Header(props) {

    const [ctContent] = useState(content);


   
    return(

        <nav>
{ ctContent.map((c) =>  (
<Link class="w3-btn" key={c.pageTitle} to={c.pageTitle} >{c.pageTitle}</Link>
))}
</nav>


    )
}