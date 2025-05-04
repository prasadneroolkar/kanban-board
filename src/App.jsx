import DualComponent from "./features/auth/DualComponent";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./features/auth/PrivateRoute";
import Layout from "./components/Layout";
import { Example } from "./components/Example";

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
              <Example />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
