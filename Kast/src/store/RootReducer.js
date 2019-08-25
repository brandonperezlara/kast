//communicate dispatch with reduce and its variables
export function reducer(state, action) {
  switch (action.type) {

    case "FETCH_TASKS":
      return { ...state, allTasks: action.payload 
      };

    case "FETCH_SUBS":
      return {
        ...state, allSubs: action.payload
      };
  
    case "MOVE_TASK":
      const { id, newStatus } = action.payload;
      state.allTasks[id] = {
        ...state.allTasks[id],
        status: newStatus
      };
      return {
        ...state
      };

    case "ADD_TASKS":
      return {
        ...state
      };

    case "UPDATE_TASKS":
      return {
        ...state
      };

    case "ADD_SUBS":
      return {
        ...state
      };

    case "DELETE_TASKS":

      return {
        ...state
      };
    case "DELETE_SUBS":
      return {
        ...state
      };

    default:
      return state;
  }
}
