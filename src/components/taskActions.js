export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "DELETE_TASK",
    payload: taskId,
  };
};

export const modifyTask = (taskId, newDescription) => {
  return {
    type: "MODIFY_TASK",
    payload: { taskId, newDescription },
  };
};
