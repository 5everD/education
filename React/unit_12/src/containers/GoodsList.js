import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import Goods from '../components/Goods';
import {increment} from '../store/cartSlice';

/**
 * get data from store
 * list data
 */
export default function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    const clickHandler = (event) => {
        event.preventDefault();
        const targetClick = event.target;
        if (!targetClick.classList.contains('add-to-cart')) return true;
        dispatch(increment(targetClick.getAttribute('data-key')));
    }

    return (
        <>
            <div className="goods-field" onClick={clickHandler}>
                {goods.map(item =>
                    <Goods
                        title={item.title}
                        cost={item.cost}
                        image={item.image}
                        articul={item.article}
                        key={item.article}
                    />)
                }
            </div>
        </>
    );
}