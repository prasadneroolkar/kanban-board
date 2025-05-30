import DualComponent from "./features/auth/DualComponent";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./features/auth/PrivateRoute";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<DualComponent />} /> */}
        <Route
          index
          // path="/dashboard"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer autoClose={2000} hideProgressBar={false} />
    </>
  );
}

export default App;
