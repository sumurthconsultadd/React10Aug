const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
    console.log('state is : ', state.tasks);
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "MODIFY_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? {
                ...task,
                description: action.payload.newDescription,
              }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;