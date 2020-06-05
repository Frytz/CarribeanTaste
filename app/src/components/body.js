import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import Home from '../pages/home';
import  '../pages/contact';
import  '../pages/about';
import  '../pages/faq';
import  '../pages/products';
import  '../pages/recipes';
import './footer';



export default function Body(){
  
    

    return (<section>
                    
                     <Header/>
                  <Route exact path="/Home" component={Home}/>
       
        </section>

    )
}