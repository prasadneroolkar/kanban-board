import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  currentBoardId: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards.push(action.payload);
    },
    setCurrentBoard: (state, action) => {
      state.currentBoardId = action.payload;
    },
  },
});

export const { setBoards, setCurrentBoard } = boardSlice.actions;
export default boardSlice.reducer;
