import { IProduct } from "./product.model";

export interface IShoppingBasketState {
  items: IProduct[];
  addProduct: (item: IProduct) => void;
  deleteProduct: (id: number) => void;
  deleteAllProducts: () => void;
}
