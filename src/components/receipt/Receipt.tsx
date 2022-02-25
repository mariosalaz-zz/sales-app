import { useContext } from "react";
import {
  calculateRawTotalPrice,
  calculateSingleProductTaxes,
  calculateTotalTaxes,
  roundtoNearestDecimal,
} from "../../utils/price-utils";
import ShoppingBasketContext from "../../store/shopping-basket-context";

import "./Receipt.scss";

type Props = {
  hideReceiptHandler: () => void;
};

const Receipt = ({ hideReceiptHandler }: Props) => {
  const shoppingBasketCtx = useContext(ShoppingBasketContext);
  const totalSalesTaxes = roundtoNearestDecimal(
    calculateTotalTaxes(shoppingBasketCtx.items)
  );
  const totalPrice =
    calculateRawTotalPrice(shoppingBasketCtx.items) + totalSalesTaxes;
  return (
    <div className="receipt-container">
      <h1>Receipt</h1>
      <div className="receipt-details">
        <ul className="receipt-details-list">
          {shoppingBasketCtx.items.map((item) => {
            const totalSingleProduct =
              item.amount * item.price +
              roundtoNearestDecimal(calculateSingleProductTaxes(item));
            return (
              <li className="receipt-details-item" key={item.productId}>
                <p>
                  {`${item.name}: ${totalSingleProduct.toFixed(2)} `}
                  {item.amount > 1 && (
                    <span>{`(${item.amount} @ ${item.price})`}</span>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
        <p>Total Taxes: {totalSalesTaxes.toFixed(2)}</p>
        <p><strong>Total: {totalPrice.toFixed(2)}</strong></p>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          shoppingBasketCtx.deleteAllProducts();
          hideReceiptHandler();
        }}
      >
        Back to Shop
      </button>
    </div>
  );
};

export default Receipt;
