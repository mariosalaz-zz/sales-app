import { useEffect, useState } from "react";
import Products from "./Products";
import { IProduct } from "../../models/product.model";

const ProductsContainer = () => {
  const [productsList, setProductList] = useState([] as IProduct[]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProductlistData(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const setProductlistData = (products: IProduct[]) => {
    setProductList(products);
  };

  return <Products productsList={productsList} />;
};

export default ProductsContainer;
