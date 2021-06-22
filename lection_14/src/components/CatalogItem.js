import React from "react";
import {Button, Card, Col} from "react-bootstrap";

function CatalogItem({catalogItem, addToCart, removeFromCart, cart}) {

    return <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src={catalogItem.imgSrc} />
            <Card.Body>
                <Card.Title>{catalogItem.brand} {catalogItem.model}</Card.Title>
                <Card.Text>
                    Price: {catalogItem.price}$
                </Card.Text>
                {cart.filter(el => el.id === catalogItem.id).length ?
                    <Button variant="danger"
                            onClick={() => removeFromCart(catalogItem.id)}>
                        Remove from Cart</Button> :

                    <Button variant="success"
                            onClick={() => addToCart(catalogItem.id)}>
                        Add to Cart</Button>}

            </Card.Body>
        </Card>
    </Col>
}

export default CatalogItem;