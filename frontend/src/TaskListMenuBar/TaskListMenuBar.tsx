import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function TaskListMenuBar({
  taskFormOpen,
  setTaskFormOpen,
}: {
  taskFormOpen: boolean;
  setTaskFormOpen: Function;
}) {
  return (
    <>
      <div className="task_list_menu_bar">
        <button
          onClick={() => {
            setTaskFormOpen(!taskFormOpen);
          }}
        >
          {taskFormOpen ? <RemoveCircleIcon /> : <AddCircleIcon />}
        </button>
        <div></div>
      </div>
    </>
  );
}
