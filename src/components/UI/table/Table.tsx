import { IProduct } from "../../../models/product.model";

type Props = {
  items: IProduct[];
};

const Table = ({ items }: Props) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Semitotal</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ productId, name, amount, price }, index) => {
        return (
          <tr key={productId}>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{amount}</td>
            <td>$ {(amount * price).toFixed(2)}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Table;
