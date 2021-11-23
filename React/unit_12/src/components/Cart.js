import React from 'react';
import {useSelector} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';

export default function Cart(props) {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const onClick = props.onClick
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['article']] = item;
        return accum;
    }, {});
    const sum = Object.keys(cart).reduce((accum, item) => {
        accum = accum + cart[item] * goodsObj[item]['cost'];
        return accum;
    }, 0);


    return (
        <div className="cart-block">
            <table>
                <thead>
                <tr>
                    <th> Изображение товара</th>
                    <th> Название товара</th>
                    <th> Цена за единицу</th>
                    <th> Количество</th>
                    <th> Стоимость</th>
                    <th> Уменьшить</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                {Object.keys(cart).map(item =>
                    <tbody key={item + goodsObj[item]['title']}>
                    <tr>
                        <td><img src={goodsObj[item]['image']} alt={goodsObj[item]['title']} height={20}/></td>
                        <td>{goodsObj[item]['title']}</td>
                        <td>{goodsObj[item]['cost']} денег</td>
                        <td>{cart[item]} шт.</td>
                        <td>{cart[item] * goodsObj[item]['cost']} денег</td>
                        <td>
                            <button
                                className="minus-from-cart"
                                data-key={item}
                                onClick={onClick}
                            >Minus
                            </button>
                        </td>
                        <td>
                            <button
                                className="remove-from-cart"
                                data-key={item}
                                onClick={onClick}
                            >Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                )}
                <tfoot>
                <tr>
                    <th>ИТОГО: {sum} денег</th>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}