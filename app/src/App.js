import React, { useState, useContext } from 'react';
import { content } from './data/content';
import {activeContContext} from './contexts/activeContent';
import Body from './components/body';

function App() {

  const [ctContent] = useState(content);
  const [activeContent, setActiveContent] = useState(ctContent[0])

  return (
    <div>
      <activeContContext.Provider value={activeContent}> 
     <Body />
     </activeContContext.Provider>
    </div>
  );
}

export default App;
