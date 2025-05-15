import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import ModalContextProvider from "./context/ModalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ModalContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
