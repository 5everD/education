import React from 'react';
import Cart from '../components/Cart'
import {useDispatch} from "react-redux";
import {decrement, remove} from "../store/cartSlice";

export default function CartList() {
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.preventDefault();
        const targetClick = event.target;
        if (!targetClick.classList.contains('minus-from-cart') && !targetClick.classList.contains('remove-from-cart')) return true;
        targetClick.classList.contains('minus-from-cart') && dispatch(decrement(targetClick.getAttribute('data-key')));
        targetClick.classList.contains('remove-from-cart') && dispatch(remove(targetClick.getAttribute('data-key')));
    }


    return (
            <Cart
                onClick ={clickHandler}
            />
    );
}