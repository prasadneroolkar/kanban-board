import * as React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root"); // For accessibility
import Button from "../button/Button";
import Close from "../../assets/images/close.svg";

const ModalComponent = ({ textContent }) => {
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
        <h2 className="text-xl font-semibold dark:text-white">Add New Board</h2>
        <div className="mt-8">
          <p className="text-sm dark:text-white text-gray-500 font-semibold tracking-wide">
            Board Name
          </p>
          <input
            type="text"
            className="rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent px-4 py-2 ring-0 "
            placeholder="e.g Web Design"
          />
        </div>

        <div className="mt-8">
          <p className="text-sm dark:text-white text-gray-500 font-semibold tracking-wide ">
            Board Columns
          </p>
          <div className="flex items-center space-x-2 justify-center mt-[12px]">
            <input
              type="text"
              className="rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent  p-[8px_16px] ring-0 "
            />
            <img src={Close} alt="close" className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2 justify-center mt-[12px]">
            <input
              type="text"
              className="rounded-md text-sm border-[0.5px] w-full border-gray-500 tracking-wide focus:outline-[#635fc7] focus:outline-1 bg-transparent  p-[8px_16px] ring-0 "
            />
            <img src={Close} alt="close" className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center mt-3 flex-col space-y-6">
          <Button
            buttonName="Add New Column"
            icon="+"
            className="w-full justify-center"
          />
          <Button
            buttonName="Create New Board"
            className="w-full justify-center"
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
