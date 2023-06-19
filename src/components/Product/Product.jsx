import React from 'react';
import ModalImage from "react-modal-image";
import './Product.css';
const Product = (props) => {

    const {product, handleAddToCart} = props;

    const { name, img, ratings, price, seller } = product;
    return (
        <div className="product_item">
            <ModalImage
                small={img}
                large={img}
                className={'product_img'}
                alt={name}
            />
            <div className="product_content">
                <h5>{name}</h5>
                <h6 className="mb-3">Price: {price}</h6>
                <span className="d-block">Brand: {seller}</span>
                <span className="d-block mb-4">Rating: {ratings}</span>
                <button onClick={ () =>handleAddToCart(product) } className="btn btn-outline-warning">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
