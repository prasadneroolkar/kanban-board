import * as React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root"); // For accessibility

const ModalComponent = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg  max-w-md max-h-[95vh] z-20 absolute mx-auto top-0 left-0 right-0 bottom-0 "
        overlayClassName="fixed bg-black opacity-50 inset-0"
      >
        <h2 className="text-xl font-semibold">Modal Title</h2>
        <p className="mt-2">This is a simple modal styled with Tailwind CSS.</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white py-1 px-3 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
