import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json').then(res => res.json().then(data => setProducts(data)));
    } , []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <section className="shop_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="product-left-side product_3_grid">
                            {
                                products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}/>)
                            }
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="car-right-side">
                            <h3>Cart Right Side Bar</h3>
                            Total Product : {cart.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;