import ShoppingBasketButton from "../shoppingBasketButton/ShoppingBasketButton";

import "./Header.scss";

type Props = {
  showModalHandler: () => void;
  hideModalHandler: () => void;
};

const Header = ({ showModalHandler }: Props) => (
  <header>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Sales App</span>
      </div>
      <ShoppingBasketButton showModalHandler={showModalHandler} />
    </nav>
  </header>
);

export default Header;
