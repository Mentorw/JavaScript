import React from "react";
import {Button} from "react-bootstrap";

function CartItem({cartItem, removeFromCart}) {
    return <div>
        <div className={'mb-2'}>{cartItem.catalogItem.brand} {cartItem.catalogItem.model}
            ({cartItem.catalogItem.price})</div>
        <div className={'text-center'}>
            <Button variant={'danger'} onClick={() => removeFromCart(cartItem.id)}>Remove from Cart</Button>
        </div>
        <hr className={'my-2'}/>
    </div>
}

export default CartItem;