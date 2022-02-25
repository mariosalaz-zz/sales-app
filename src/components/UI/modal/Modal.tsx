import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

type Props = {
  children: ReactNode
}

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = ({ children }: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

const htmlElement = document.getElementById("overlay");

const Modal = ({ children }: Props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, htmlElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        htmlElement!
      )}
    </Fragment>
  );
};

export default Modal;
