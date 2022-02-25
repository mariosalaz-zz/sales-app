import { useContext } from "react";
import { IProduct } from "../../models/product.model";
import ShoppingBasketContext from "../../store/shopping-basket-context";
import Product from "./Product";

interface Props extends IProduct {
  setProductAmount?: (value: string) => void,
  addProductItem?: (item: IProduct) => void
}

const ProductContainer = ({...rest}: Props) => {
  const shoppingBasketCtx = useContext(ShoppingBasketContext);
  const addProductHandler = (amount: number) => {
    if (amount === 0) {
      shoppingBasketCtx.deleteProduct(rest.productId)
    } else {
      shoppingBasketCtx.addProduct({
        ...rest,
        amount: amount
      })
    }
  }

  return(
    <Product addProductHandler={addProductHandler} {...rest}/>
  )
}

export default ProductContainer;