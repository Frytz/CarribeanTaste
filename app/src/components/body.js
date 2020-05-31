import React, {useState } from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import './footer';

import {activeContContext} from '../contexts/activeContent';
import { content } from '../data/content';

export default function Body(){
  
    
    const [ctContent] = useState(content);
    const [activeContent, setActiveContent] = useState(ctContent[0])

    return (<section>
                     <activeContContext.Provider value={activeContent}> 
                     <Header/>
                   
       </activeContContext.Provider>

        </section>

    )
}