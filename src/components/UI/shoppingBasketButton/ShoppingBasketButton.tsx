import { useContext } from "react";
import ShoppingBasketContext from "../../../store/shopping-basket-context";

import "./ShoppingBasketButton.scss";

type Props = {
  showModalHandler: () => void;
};

const ShoppingBasketButton = ({ showModalHandler }: Props) => {
  const shoppingBasketCtx = useContext(ShoppingBasketContext);
  const numberPickedItems = shoppingBasketCtx.items.reduce(
    (prevItem, currItem) => prevItem + currItem.amount, 0);
    
  return (
    <button
      type="button"
      className="btn btn-default shopping-basket-button"
      onClick={showModalHandler}
    >
      <i className="bi bi-basket"></i>
      <span className="badge bg-danger">{numberPickedItems}</span>
    </button>
  );
};

export default ShoppingBasketButton;
