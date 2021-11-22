import React from 'react';
import {useSelector} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';

export default function Cart(props) {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['article']] = item;
        return accum;
    }, {});
    const handleMinus = props.handleMinus
    const handleDelete = props.handleDelete


    return (
        <div className="cart-block">
            <table>
                <thead>
                <tr>
                    <th> Название товара</th>
                    <th> Цена за единицу</th>
                    <th> Количество</th>
                    <th> Стоимость</th>
                    <th>
                        Уменьшить
                    </th>
                    <th>
                        Удалить
                    </th>
                </tr>
                </thead>
                {Object.keys(cart).map(item =>
                    <tbody key={item + goodsObj[item]['title']}>
                    <tr>
                        <td>{goodsObj[item]['title']}</td>
                        <td>{goodsObj[item]['cost']}</td>
                        <td>{cart[item]}</td>
                        <td>{cart[item] * goodsObj[item]['cost']}</td>
                        <td>
                            <button
                                className="minus-from-cart"
                                data-key={item}
                                onClick={handleMinus}
                            >Minus
                            </button>
                        </td>
                        <td>
                            <button
                                className="delete-from-cart"
                                data-key={item}
                                onClick={handleDelete}
                            >Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
}