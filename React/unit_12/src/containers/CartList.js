import React from 'react';
import Cart from '../components/Cart'

export default function CartList() {
    const handleMinus =()=>{

    };
    const handleDelete =()=>{

    };

    return (
            <Cart
                handleMinus ={handleMinus}
                handleDelete ={handleDelete}
            />
    );
}