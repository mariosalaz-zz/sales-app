import { IProduct } from "../../models/product.model";
import ProductContainer from "../product/ProductContainer";
import "./Products.scss";

type Props = {
  productsList: IProduct[];
};

const Products = ({ productsList }: Props) => (
  <main className="products-container">
    <ul className="products-list">
      {productsList &&
        productsList.map((product: IProduct) => {
          return (
            <li key={product.productId} className="product-item">
              <ProductContainer {...product} />
            </li>
          );
        })}
    </ul>
  </main>
);

export default Products;
