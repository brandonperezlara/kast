import React, { memo } from "react";
import TaskCard from "../TaskCard";

function Tasks({ tasks }) {
  return (
    <>
      {tasks.map(task => (
        <TaskCard key={task._id} {...task} task_={task} />
      ))}
    </>
  );
}
export default memo(Tasks);
