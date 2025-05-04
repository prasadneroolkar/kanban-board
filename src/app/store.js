import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../components/board/boardSlice";

export const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});
