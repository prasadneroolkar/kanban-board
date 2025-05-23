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

      const column = board.columns.find((cid) => cid.id === columnId);
      if (!column) return;

      column.tasks.push(task);
    },
    updateBoardAction: (state, action) => {
      const updatedBoard = action.payload;
      const index = state.boards.findIndex(
        (board) => board.id === updatedBoard.id
      );

      if (index !== -1) {
        state.boards[index] = updatedBoard;
      }
    },
    deleteBoard: (state, action) => {
      const boardIdToDelete = action.payload;
      state.boards = state.boards.filter(
        (board) => board.id !== boardIdToDelete
      );

      // Clear currentBoardId if it's the one being deleted
      if (state.currentBoardId === boardIdToDelete) {
        state.currentBoardId = null;
      }
    },
  },
});

export const {
  addBoard,
  setCurrentBoard,
  addTask,
  updateBoardAction,
  deleteBoard,
} = boardSlice.actions;
export default boardSlice.reducer;
