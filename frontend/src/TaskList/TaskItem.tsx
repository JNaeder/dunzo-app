import { useState } from "react";
import { Task } from "../types";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TaskItem({ task }: { task: Task }) {
  const [taskOpen, setTaskOpen] = useState(false);

  return (
    <>
      <div
        className={taskOpen ? `task_list_item_open` : `task_list_item_closed`}
      >
        <div className="task_list_item_top_row">
          <CircleIcon />
          <p className="task_item_title">{task.title}</p>
          <p className={`task_list_priority_${task.priority}`}>
            {task.priority.toUpperCase()}
          </p>
          <p>{task.dueDate ? `Due: ${task.dueDate}` : ""}</p>
          <button
            onClick={() => {
              setTaskOpen(!taskOpen);
            }}
          >
            {taskOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </button>
        </div>
        <p>{taskOpen ? task.description : ""}</p>
      </div>
    </>
  );
}
