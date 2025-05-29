import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import Columns from "../board/Columns";
import NewColumn from "../board/NewColumn";
import { moveTask, setJustDragged } from "../board/boardSlice.js";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const Board = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.board.boards);
  const currentId = useSelector((state) => state.board.currentBoardId);
  const selectedBoard = boards.find((board) => board.id === currentId);

  const onDragStart = () => {
    dispatch(setJustDragged(true));
  };

  const onDragEnd = (result) => {
    console.log("Drag result", result);

    dispatch(setJustDragged(true));

    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    try {
      dispatch(
        moveTask({
          taskId: draggableId,
          sourceColId: source.droppableId,
          targetColId: destination.droppableId,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        })
      );
      console.log("Drag result", result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-dvw bg-[#f4f7fd] flex dark:bg-dark-layout">
      <Sidebar />
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="flex gap-11 py-4 px-10 ml-[261px] overflow-x-scroll scrollbar-hide overflow-y-scroll">
          <Columns board={selectedBoard} />
          <NewColumn />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
