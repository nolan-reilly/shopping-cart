import { useState, useEffect } from "react";

export default function Product(props) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  // Learned here that sometimes you need to handle the initial state of
  // a react component as it can cause errors when loading
  if (loading) {
    return <p>Loading Product...</p>;
  }

  return (
    <div className="card flex flex-col gap-16 border-radius p-12">
      <img
        className="half-width mx-auto"
        src={product.image}
        alt={product.title}
      />
      <p>{product.title}</p>

      <p className="price-text">${product.price}</p>

      <div className="flex flex-col gap-16">
        <div className="flex flex-row align-center gap-16">
          <label htmlFor="quantity">Quantity</label>
          <input
            className="full-width quantity-input"
            type="number"
            name="quantity"
          />
        </div>
        <button className="full-width add-btn">Add to Cart</button>
      </div>
    </div>
  );
}
