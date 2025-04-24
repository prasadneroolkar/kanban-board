import DualComponent from "./features/auth/DualComponent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<DualComponent />} />
      </Routes>
    </>
  );
}

export default App;
