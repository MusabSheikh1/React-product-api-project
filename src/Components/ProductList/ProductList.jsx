import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <section className="products">
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="price">${product.price}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default ProductList;
