import React, { useState} from 'react';
import Body from './components/body';
import { content } from './data/content';

import {activeContContext} from './contexts/activeContent';


function App() {
  const [ctContent] = useState(content);
    const [activeContent, setActiveContent] = useState(ctContent[0])
 

  return (
    <div>
       <activeContContext.Provider value={activeContent}> 
       <nav>
 

 {ctContent.map( c => (

<button key={c.pageTitle} onClick={() => setActiveContent(c.cont)}>{c.pageTitle}</button>

 
))}



</nav>
{activeContent && <Body cont={activeContent.cont} />}
     </activeContContext.Provider>
    </div>
  );
}

export default App;
