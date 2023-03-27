import Product from "./component/Products";
import { React } from "react";

const Products = ({ products }) => {
    const productToRender = products.map((product) => {
        const {
            id, 
            name,
            description,
            
            
        } = product;
        return (
            <>
            <Product
            key={id}
            name={name}
            description={description}
            />
            </>
        );
    });

    return <ul className="product-grid">{productToRender}</ul>;

};


export default Products; 
