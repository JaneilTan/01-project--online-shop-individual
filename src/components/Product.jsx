import Product from "./Product";

const Products = ({ products }) => {
    const productToRender = products.map((product) => {
        const {
            id, 
            name,
            description,
            imageUrl = product.images[0],
            price = product.prices[0],

        } = product;
        return (
            <Product
            key={id}
            name={name}
            description={description}
            src={imageUrl}
            price={price}
            />
        );
    });
    return <ul className="product-grid">{productToRender}</ul>;

};


export default Products; 
