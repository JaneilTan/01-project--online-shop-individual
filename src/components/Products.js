import Product from "./Product";
import { React } from "react";
import { checkout } from "../services/checkout";

const Products = ({ products }) => {
    const productToRender = products.map((product) => {
        const {
            id, 
            name,
            description,
            image = product.images[0],
            price = product.prices[0].unit_amount / 100,
            priceId = product.prices[0].id,

        } = product;
        return (
    
            <Product
            key={id}
            name={name}
            description={description}
            src={image}
            price={price}
            onCheckout={() => checkout(priceId)}
            />
            
        );
    });

    return <ul className="product-grid">{productToRender}</ul>;

};


export default Products; 
