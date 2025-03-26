import Navbar from "./Navbar";
import Product from "./Product";
import "./styles.css";

export default function ShoppingPage() {
  // Have some state here that keeps track of the items that a person
  // has purchased. Might have to add props to navbar, and possibly
  // lift state out of product to update navbar

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Shopping</h1>
        <div className="grid gap-16">
          <Product id="1" />
          <Product id="2" />
          <Product id="3" />
          <Product id="4" />
          <Product id="5" />
        </div>
      </div>
    </>
  );
}
