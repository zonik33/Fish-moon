import React, {useState} from "react";
import {FaBucket} from "react-icons/fa6"
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete = {props.onDelete} key={el.id} item={el}/>
            ))}
            <p className={'sum'}>К оплате: {new Intl.NumberFormat().format(sum)} рублей</p>
        </div>)
}
const showNothing = (props) => {
    return (<div className={'empty'}>
        <h2>Товаров нет</h2>
    </div>)
}
export default function Header (props){
let [cartOpen, setCartOpen] = useState(false)

    return(
        <header>
            <div>
                <span className={'logo'}>
                    Fish Moon
                </span>
                <ul className={'nav'}>
                    <li> Про нас </li>
                    <li> Контакты </li>
                    <li> Кабинет </li>
                </ul>

                <FaBucket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className={'shop-cart'}>
                        {props.orders.length > 0 ?
                        showOrders(props): showNothing()}
                    </div>
                )}
            </div>
            <div className={'presentation'}>
            </div>
        </header>
    )
}