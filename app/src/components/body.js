import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import Home from '../pages/home';
import  '../pages/contact';
import  '../pages/about';
import  '../pages/faq';
import  '../pages/products';
import  '../pages/recipes';
import '../pages/error';
import './footer';
import {activeContContext} from '../contexts/activeContent';
import {content} from '../data/content';

export default function Body(){
    

const [cfData] = useState(content)



    return (<section>
                   <activeContContext.Provider value={cfData}>
                     <Header/>

                  <Route exact path="/Home" component={Home}/>
 </activeContContext.Provider>
        </section>

    )
}