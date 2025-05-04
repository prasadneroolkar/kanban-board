import { useDispatch } from "react-redux";
import { setBoards, setCurrentBoard } from "../components/board/boardSlice.js";

export const Example = () => {
  const dispatch = useDispatch();

  const addBoards = () => {
    const dummyBoards = [
      { id: "1", name: "Personal Tasks" },
      { id: "2", name: "Work Project" },
    ];
    dispatch(setBoards(dummyBoards));
  };

  const selectBoard = (id) => {
    dispatch(setCurrentBoard(id));
  };

  return (
    <div>
      <button onClick={addBoards}>Load Dummy Boards</button>
      <button onClick={() => selectBoard("1")}>Select Board 1</button>
    </div>
  );
};
