import { useState } from "react";
import { Task } from "../types";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TaskItem({
  task,
  taskList,
}: {
  task: Task;
  taskList: Task[];
}) {
  const [taskOpen, setTaskOpen] = useState(false);
  const [currentTaskState, setCurrentTaskState] = useState(task.completed);

  return (
    <>
      <div
        className={taskOpen ? `task_list_item_open` : `task_list_item_closed`}
      >
        <div className="task_list_item_top_row">
          <button
            className="task_checkbox_button"
            onClick={() => {
              const updatedTask = task;
              updatedTask.completed = !task.completed;
              const taskIndex = task.id - 1;
              taskList.splice(taskIndex, 1);
              taskList.splice(taskIndex, 0, updatedTask);
              setCurrentTaskState(updatedTask.completed);
            }}
          >
            {currentTaskState ? (
              <CheckCircleIcon className="task_checkbox" />
            ) : (
              <CircleIcon className="task_checkbox" />
            )}
          </button>
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
