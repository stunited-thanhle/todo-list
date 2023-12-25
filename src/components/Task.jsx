import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Task = ({ task, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return (
    <li className=" mb-1 border-b border-gray-300 space-y-2">
      {editing ? (
        <form
          onSubmit={() => {}}
          className=" flex items-center justify-between p-1 px-3 w-full"
        >
          <div className=" flex items-center space-x-3 w-full">
            <input
              type="text"
              value={title}
              onChange={() => {}}
              className="w-full bg-transparent py-3 text-lg"
            />
          </div>
          <div className=" flex space-x-3">
            <button type="submit">
              <MdOutlineDone
                size={20}
                className=" hover:text-green-400 text-gray-500"
              />
            </button>
            <button type="button" onClick={() => {}}>
              <RxCross2
                size={20}
                className=" text-gray-500 hover:text-orange-400"
              />
            </button>
          </div>
        </form>
      ) : (
        <div className=" flex items-center justify-between p-4 px-3">
          <div className=" flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {}}
              className="round rounded-none"
            />

            <span
              className={` ${
                task.completed
                  ? "line-through text-gray-500 text-lg"
                  : "text-lg"
              } `}
            >
              {task.title}
            </span>
          </div>
          <div className=" flex items-center space-x-3">
            <button onClick={() => {}}>
              <CiEdit
                size={20}
                className=" text-gray-500 hover:text-yellow-500"
              />
            </button>
            <button onClick={() => {}}>
              <AiOutlineDelete
                size={18}
                className=" text-gray-500 hover:text-red-500"
              />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
