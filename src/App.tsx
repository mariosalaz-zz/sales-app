import { useState } from "react";
import Header from "./components/UI/header/Header";
import Products from "./components/products/ProductsContainer";
import ShoppingBasket from "./components/shoppingBasket/ShoppingBasket";
import ShoppingBasketProvider from "./store/shopping-basket-provider";
import Receipt from "./components/receipt/Receipt";


function App() {
  const [shownModal, setShownModal] = useState(false);
  const [shownReceipt, setShownReceipt] = useState(false);

  const showModalHandler = () => {
    setShownModal(true);
  };

  const hideModalHandler = () => {
    setShownModal(false);
  };

  const showReceiptHandler = () => {
    setShownModal(false);
    setShownReceipt(true);
  };

  const hideReceiptHandler = () => {
    setShownReceipt(false);
  };

  return (
    <ShoppingBasketProvider>
      <div className="App container-fluid">
        {shownModal && (
          <ShoppingBasket
            hideModalHandler={hideModalHandler}
            showReceiptHandler={showReceiptHandler}
          />
        )}
        <Header
          showModalHandler={showModalHandler}
          hideModalHandler={hideModalHandler}
        />
        {shownReceipt ? (
          <Receipt hideReceiptHandler={hideReceiptHandler} />
        ) : (
          <Products />
        )}
      </div>
    </ShoppingBasketProvider>
  );
}

export default App;
