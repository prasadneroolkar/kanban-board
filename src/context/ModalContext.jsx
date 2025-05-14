import React, { createContext, useState, useContext } from "react";

const modeContext = createContext();
export const useModal = () => useContext(modeContext);

const ModalContextProvider = ({ children }) => {
  const [modeType, setModeType] = useState(null);

  const openModal = (type) => setModeType(type);
  const closeModal = () => setModeType(null);
  return (
    <modeContext.Provider value={{ modeType, openModal, closeModal }}>
      {children}
    </modeContext.Provider>
  );
};

export default ModalContextProvider;
