import { useState } from "react";

import { Task } from "../types";
import TaskItem from "./TaskItem";
import TaskListMenuBar from "../TaskListMenuBar/TaskListMenuBar";
import InputForm from "../InputForm";

export default function TaskList({
  taskList,
  setCurrentTaskList,
}: {
  taskList: Task[];
  setCurrentTaskList: Function;
}) {
  const [taskFormOpen, setTaskFormOpen] = useState(false);

  return (
    <>
      <div className="task_list_container">
        <TaskListMenuBar
          setTaskFormOpen={setTaskFormOpen}
          taskFormOpen={taskFormOpen}
        />
        <InputForm
          taskFormOpen={taskFormOpen}
          taskList={taskList}
          setCurrentTaskList={setCurrentTaskList}
        />
        {taskList.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
    </>
  );
}
