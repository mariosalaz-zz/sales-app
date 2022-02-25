import { IProduct } from "../../models/product.model";

import "./Product.scss";
import AmountInput from "../amountInput/AmountInput";

interface Props extends IProduct {
  addProductHandler: (amount: number) => void;
}

const Product = ({ addProductHandler, ...rest }: Props) => {
  const { name, price, imageURL } = rest;
  const enteredAmount = (value: string) => {
    const amount = Number(value);
    if (amount < 0) {
      throw new Error("Not a valid number");
    }

    addProductHandler(amount);
  };

  return (
    <div className="product-container">
      <div className="card">
        <img src={imageURL} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">$ {price.toFixed(2)}</p>
        </div>
        <div className="product-menu-container">
          <AmountInput getAmount={enteredAmount} />
        </div>
      </div>
    </div>
  );
};

export default Product;
