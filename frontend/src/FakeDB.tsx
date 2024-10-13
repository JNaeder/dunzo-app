import { Task } from "./types";

export const fakeDB: Task[] = [
  {
    id: 1,
    title: "Take Out The Trash",
    description:
      "Take the trash out to the curb. Bring back the bins when they're done.",
    priority: "low",
    dueDate: "2021-10-01",
    completed: false,
  },
  {
    id: 2,
    title: "Ask Boss about big raise",
    description: "I need Mo' Money!",
    priority: "medium",
    dueDate: "2021-10-02",
    completed: false,
  },
];
