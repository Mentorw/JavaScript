import React from "react";
import './css/Cart.css';
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart }) {
    return <div className={'cart bg-success text-white p-3'}>
        {cart.map(cartItem => <CartItem key={cartItem.id}
            cartItem={cartItem}
            removeFromCart={removeFromCart}
        />)}
    </div>
}

export default Cart