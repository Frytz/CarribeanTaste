import React, { useContext } from 'react';
import {activeContContext} from '../contexts/activeContent';


export default function Header(props) {



    const activeCont = useContext(activeContContext);
   
    return(

        <nav>
 

            <img src={props.logoSRC} />
            {activeCont.map( c => (
          
          <a src={c.linkRefs}>{c.linkTitle}</a>

            
      ))}



        </nav>
    )
}