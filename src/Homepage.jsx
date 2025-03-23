import Navbar from "./Navbar";
import Product from "./Product";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Homepage</h1>

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
