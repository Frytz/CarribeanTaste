import React, {createContext, Component} from 'react';
import Client from '../components/Admin'


export const activeContContext = createContext();

class ProductProvider extends Component {

    state= {

        products: [],
        category: [],
        tags: [],
        recipes: [],
        price: 0,
        isSoldOut: false,

    }

}