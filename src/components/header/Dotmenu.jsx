import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditBoard from "../modal/EditBoard";
import { deleteBoard, setCurrentBoard } from "../board/boardSlice.js";
import { useDispatch, useSelector } from "react-redux";

const ITEM_HEIGHT = 48;

const Dotmenu = () => {
  // const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const currentBoardId = useSelector((state) => state.board.currentBoardId);
  const boards = useSelector((state) => state.board.boards);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    // setIsEditModalOpen(true); // then open the modal
    // handleClose(); // close the menu first
  };

  const handleDeleteBoard = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this board?"
    );
    if (!confirmed) return;

    dispatch(deleteBoard(currentBoardId));
    handleClose();

    const remainingBoards = boards.filter(
      (board) => board.id !== currentBoardId
    );
    dispatch(
      setCurrentBoard(remainingBoards.length ? remainingBoards[0].id : null)
    );
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className="dark:text-dark-text" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        PaperProps={{
          style: {
            marginTop: "15px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "10rem",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          className:
            "text-sm font-medium bg-white dark:text-gray-400 dark:bg-darkbg p-0 dark:text-sm ",
        }}
      >
        <div className="">
          <ul className=" w-40 text-sm z-50 font-medium  bg-white dark:bg-[#20212c] space-y-4 py-2 px-4 rounded-lg  h-auto pr-12">
            <li
              className=" cursor-pointer dark:text-gray-400 text-gray-700"
              onClick={handleEditClick}
            >
              {/* <EditBoard /> */}
            </li>
            <li
              className=" cursor-pointer dark:text-gray-400 text-gray-700"
              onClick={handleDeleteBoard}
            >
              Delete Board
            </li>
          </ul>
        </div>
      </Menu>
    </div>
  );
};

export default React.memo(Dotmenu);
