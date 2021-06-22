import React, {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import {getCatalog} from './apiCatalog';
import CatalogItem from './CatalogItem';
import Cart from "./Cart";

function Catalog() {
    const title = 'Catalog';
    const [catalog, setCatalog] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = id => {
        let itemToAdd = catalog.filter(el => el.id === id)[0];
        setCart([...cart, {catalogItem: itemToAdd, id, count: 1}]);
    }

    const removeFromCart = id => {
        setCart(cart.filter(cartItem => cartItem.id !== id))
    }

    useEffect(() => {
        getCatalog().then(data => setCatalog(data))
    }, [])

    return <Container className={'mt-3'}>
        <h2>{title}:</h2>
        {cart.length ? <Cart cart={cart} removeFromCart={removeFromCart}/> : ''}
        <Row>
            { catalog.map(catalogItem => <CatalogItem key={catalogItem.id}
                                                      addToCart={addToCart} cart={cart}
                                                      removeFromCart={removeFromCart}
                                                      catalogItem={catalogItem}/>) }

        </Row>

    </Container>
}

export default Catalog;