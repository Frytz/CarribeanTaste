import React, {useState} from 'react';
import {Route} from 'react-router-dom';

import {content} from '../data/content';


export default function Home() {

    const [ctContent] = useState(content);


    return(

        <Route exact path="/home">
            <article>
        {ctContent.map(h => (
                <h1>{h.intro}</h1>
        )) }       
   
            </article>
        </Route>

    )


}