import { useState } from "react";
import "./App.css";
import "./TaskList/TaskList.css";
import "./TaskListMenuBar/TaskListMenuBar.css";
import TaskList from "./TaskList/TaskList";
import NavBar from "./NavBar/NavBar";

import { fakeDB } from "./FakeDB";

function App() {
  const [currentTaskList, setCurrentTaskList] = useState(fakeDB);

  return (
    <>
      <NavBar />
      <TaskList
        taskList={currentTaskList}
        setCurrentTaskList={setCurrentTaskList}
      />
    </>
  );
}

export default App;
