import { useContext } from "react";
import ShoppingBasketContext from "../../store/shopping-basket-context";
import Table from "../UI/table/Table";
import Modal from "../UI/modal/Modal";

import "./ShoppingBasket.scss";

type Props = {
  hideModalHandler: () => void;
  showReceiptHandler: () => void;
};

const ShoppingBasket = ({ hideModalHandler, showReceiptHandler }: Props) => {
  const shoppingBasketCtx = useContext(ShoppingBasketContext);
  const show = !!shoppingBasketCtx.items.length;

  return (
    <Modal>
      <div className="shopping-basket-container">
        <h3 className="shopping-basket-title">Basket Summary</h3>
        {show ? (
          <Table items={shoppingBasketCtx.items} />
        ) : (
          <p className="shopping-basket-empty">Your basket is empty</p>
        )}
        <div className="shopping-basket-menu">
          <button className="btn btn-danger" onClick={hideModalHandler}>
            Cancel
          </button>
          {show && (
            <button className="btn btn-success" onClick={showReceiptHandler}>
              Buy Now!
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ShoppingBasket;
