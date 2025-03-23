export default function Product(props) {
  return (
    <div className="card flex flex-col gap-16 border-radius p-8">
      <p>{props.name}</p>

      <img className="full-width" src="https://picsum.photos/150" alt="" />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
        totam autem illo excepturi aut nemo?
      </p>

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
