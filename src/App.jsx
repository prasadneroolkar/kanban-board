import DualComponent from "./features/auth/DualComponent";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./features/auth/PrivateRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<DualComponent />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
