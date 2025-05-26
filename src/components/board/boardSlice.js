import { createSlice } from "@reduxjs/toolkit";
import boardData from "../board/boards.json";

const initialState = {
  boards: boardData,
  currentBoardId: boardData.length > 0 ? boardData[0].id : null,
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
        state.currentBoardId =
          state.boards.length > 0 ? state.boards[0].id : null;
      }
    },
    moveTask: (state, action) => {
      const { taskId, sourceColId, targetColId } = action.payload;

      const board = state.boards.find(
        (board) => board.id === state.currentBoardId
      );
      if (!board) return;

      const sourceCol = board.columns.find((col) => col.id === sourceColId);
      const targetCol = board.columns.find((col) => col.id === targetColId);
      if (!sourceCol || !targetCol) return;

      const taskToMove = sourceCol.tasks.find((task) => task.id === taskId);
      if (!taskToMove) return;

      // Remove the task from source column
      sourceCol.tasks = sourceCol.tasks.filter((task) => task.id !== taskId);

      // Add it to the target column
      targetCol.tasks.push(taskToMove);
    },
  },
});

export const {
  addBoard,
  setCurrentBoard,
  addTask,
  updateBoardAction,
  deleteBoard,
  moveTask,
} = boardSlice.actions;
export default boardSlice.reducer;
