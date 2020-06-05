import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Body from './components/body';
import 'w3-css/';

ReactDOM.render(
<Router>
    <Body />
     </Router>
 ,
  document.getElementById('root')
);
