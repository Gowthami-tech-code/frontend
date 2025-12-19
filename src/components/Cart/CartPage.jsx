import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App.jsx';
const Cart=()=>{
    return(
        <div>
            <h1>Welcome to cart page</h1>
            <userContext.Consumer>
                {(value)=><p>{value}</p>}
            </userContext.Consumer>
        </div>
    )
}
export default Cart