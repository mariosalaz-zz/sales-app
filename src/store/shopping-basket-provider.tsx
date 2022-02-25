import { ReactNode, useReducer } from "react";
import { IShoppingBasketState } from "../models/context.model";
import { IProduct } from "../models/product.model";
import ShoppingBasketContext from "./shopping-basket-context";

type Props = {
  children: ReactNode;
};

type InitialState = {
  items: IProduct[];
};

type ACTIONTYPE =
  | { type: "ADD_PRODUCT"; item: IProduct }
  | { type: "DELETE_PRODUCT"; id: number }
  | { type: "DELETE_ALL_PRODUCTS" };

const defaultShoppingBasketState = {
  items: [],
};

const shoppingBasketReducer = (state: InitialState, action: ACTIONTYPE) => {
  let updatedProducts: IProduct[] = [];
  switch (action.type) {
    case "ADD_PRODUCT":
      const productIndex = state.items.findIndex(
        (item) => item.productId === action.item.productId
      );
      if (productIndex !== -1) {
        state.items[productIndex].amount = action.item.amount;
        updatedProducts = [...state.items];
      } else {
        updatedProducts = [...state.items, action.item];
      }

      return {
        ...state,
        items: updatedProducts,
      };

    case "DELETE_PRODUCT":
      updatedProducts = state.items.filter(
        (item) => item.productId !== action.id
      );

      return {
        ...state,
        items: updatedProducts,
      };

    case "DELETE_ALL_PRODUCTS":
      return {
        ...state,
        items: [],
      };
  }
};

const ShoppingBasketProvider = ({ children }: Props) => {
  const [shoppingBasketState, dispatchShoppingBasketAction] = useReducer(
    shoppingBasketReducer,
    defaultShoppingBasketState
  );
  const addProductHandler = (item: IProduct) => {
    dispatchShoppingBasketAction({
      type: "ADD_PRODUCT",
      item: item,
    });
  };
  const deleteProductsHandler = (id: number) => {
    dispatchShoppingBasketAction({
      type: "DELETE_PRODUCT",
      id: id,
    });
  };
  const deleteAllProductsHandler = () => {
    dispatchShoppingBasketAction({
      type: "DELETE_ALL_PRODUCTS",
    });
  };
  const shoppingBasketContext: IShoppingBasketState = {
    items: shoppingBasketState.items,
    addProduct: addProductHandler,
    deleteProduct: deleteProductsHandler,
    deleteAllProducts: deleteAllProductsHandler,
  };

  return (
    <ShoppingBasketContext.Provider value={shoppingBasketContext}>
      {children}
    </ShoppingBasketContext.Provider>
  );
};

export default ShoppingBasketProvider;
