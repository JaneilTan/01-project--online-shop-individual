

const Product = ({ name, description, src, price, onCheckout }) => {
    return (
        <li className="product-grid-item">
            <div>
            <img src={src} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
  
            <p>${price}</p>
            <button onClick={onCheckout}>Buy now</button>
            </div>
        </li>
    );
  };
export default Product;