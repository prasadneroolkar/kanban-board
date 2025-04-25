import DualComponent from "./features/auth/DualComponent";
import Board from "./features/board/Board";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<DualComponent />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
