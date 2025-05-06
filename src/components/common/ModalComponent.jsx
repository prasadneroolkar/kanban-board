import * as React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root"); // For accessibility
import Button from "../button/Button";
import Close from "../../assets/images/close.svg";
import ModalHeading from ".././modal/ModalTitle";

const ModalComponent = ({ textContent, children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={openModal} className="cursor-pointer">
        {textContent}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="scrollbar-hide overflow-y-scroll bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto my-auto w-full px-8  py-8 rounded-xl"
        overlayClassName="fixed bg-black/50 inset-0 size-full flex items-center z-20"
      >
        {typeof children === "function" ? children(closeModal) : children}
      </Modal>
    </>
  );
};

export default ModalComponent;
