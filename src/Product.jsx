import { useState, useEffect } from "react";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
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
    <div className="card flex flex-col gap-16 border-radius p-8">
      <p>{product.title}</p>

      <img className="full-width" src={product.image} alt={product.title} />

      <p>{product.description}</p>
      <p>{product.price}</p>

      <div className="flex flex-row">
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input type="text" name="quantity" />
        </div>
        <button className="full-width">Add to Cart</button>
      </div>
    </div>
  );
}
