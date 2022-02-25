import React from "react";
import { IShoppingBasketState } from "../models/context.model";
import { IProduct } from "../models/product.model";

const ShoppingBasketContext = React.createContext<IShoppingBasketState>({
  items: [],
  addProduct: (item: IProduct) => {},
  deleteProduct: (id: number) => {},
  deleteAllProducts: () => {}
});

export default ShoppingBasketContext;
