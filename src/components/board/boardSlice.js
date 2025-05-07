import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  currentBoardId: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    setCurrentBoard: (state, action) => {
      state.currentBoardId = action.payload;
    },

    addTask: (state, action) => {
      const { boardId, columnId, task } = action.payload;

      const board = state.boards.find((bid) => bid.id === boardId);
      if (!board) return;

      const column = board.columns.map((cid) => cid.id === columnId);
      if (!column) return;

      if (!column.tasks) {
        column.tasks = [];
      }

      column.tasks.push(task);
    },
  },
});

export const { addBoard, setCurrentBoard, addTask } = boardSlice.actions;
export default boardSlice.reducer;
