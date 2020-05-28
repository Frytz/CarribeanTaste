import React, {useContext, useState } from 'react';
import Header from './header';
import './footer';

import {activeContContext} from '../contexts/activeContent';
import { content } from '../data/content';

export default function Body(){
  
    
    const [ctContent] = useContext(content);
    const [activeContent, setActiveContent] = useState(ctContent[0])

    return (<section>
                     <activeContContext.Provider value={activeContent}> 
        <Header />
       </activeContContext.Provider>

        </section>

    )
}