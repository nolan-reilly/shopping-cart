import Navbar from "./Navbar";
import Product from "./Product";
import "./styles.css";

export default function ShoppingPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Shopping</h1>
        <div className="grid gap-16">
          <Product name="Shirt" />
          <Product name="Shirt" />
          <Product name="Shirt" />
          <Product name="Shirt" />
          <Product name="Shirt" />
        </div>
      </div>
    </>
  );
}
