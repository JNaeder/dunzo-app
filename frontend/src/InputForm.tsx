import { useState } from "react";
import { Task } from "./types";

export default function InputForm({
  taskFormOpen,
  taskList,
  setCurrentTaskList,
}: {
  taskFormOpen: boolean;
  taskList: Task[];
  setCurrentTaskList: Function;
}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");
  const [taskDueDate, setTaskDueDate] = useState("");

  return (
    <>
      <form className={taskFormOpen ? "new_task_form" : "new_task_form_closed"}>
        <div className="task_form_item">
          <label htmlFor="task_title">Title</label>
          <input
            type="text"
            id="task_title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            data-1p-ignore
          />
        </div>
        <div className="task_form_item">
          <label htmlFor="task_desciption">Description</label>
          <textarea
            id="task_desciption"
            value={taskDescription}
            rows={4}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div className="task_form_two">
          <div className="task_form_item">
            <label htmlFor="task_priority">Priority</label>
            <select
              id="task_priority"
              onChange={(e) => setTaskPriority(e.target.value)}
              value={taskPriority}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="task_form_item">
            <label htmlFor="task_due_date">Due Date</label>
            <input
              type="date"
              id="task_due_date"
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
              data-1p-ignore
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const newTask: Task = {
              id: taskList.length + 1,
              title: taskTitle,
              description: taskDescription,
              priority: taskPriority,
              dueDate: taskDueDate,
              completed: false,
            };
            setCurrentTaskList([...taskList, newTask]);

            // Reset form
            setTaskTitle("");
            setTaskDescription("");
            setTaskPriority("");
            setTaskDueDate("");
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
