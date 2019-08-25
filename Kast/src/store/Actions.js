import getTask from "../interactions/task.js";
import addTaskFun from "../interactions/addTask.js";
import addSubsFun from "../interactions/addSubs.js";
import deleteTask from "../interactions/deleteTask.js";
import updateTask from "../interactions/updateTask.js";
import getSubs from "../interactions/subs.js";
import deleteSubs from "../interactions/deleteSubs.js";


//action : get task 
export const fetchTasks = async dispatch => {
  const AllTasks = await getTask()
   return dispatch({
    type:  "FETCH_TASKS",
    payload: await  AllTasks
  });
};

//action : get lists Personal of users 
export const fetchSubs = async dispatch => {
  const AllSubs = await getSubs()
  fetchTasks(dispatch)
  return dispatch({
    type: "FETCH_SUBS",
    payload: await AllSubs
  });
};

//action : Add tasks
export const AddTasks = async (dataTasks,dispatch) => {
  await addTaskFun(dataTasks, )
 fetchTasks(dispatch)
  return dispatch({
    type: "ADD_TASKS",
    payload: await dataTasks
  });
};

//action : Add User to List
export const AddSubs = async (dataTasks, dispatch) => {
  await addSubsFun(dataTasks, )
  fetchTasks(dispatch)
  fetchSubs(dispatch)
  return dispatch({
    type: "ADD_SUBS",
    payload: await dataTasks
  });
};

//action : Delete Tasks
export const DeleteTasks = async (dataTasks, dispatch) => {
  await deleteTask(dataTasks, )
  fetchTasks(dispatch, )
  fetchSubs(dispatch, )
  return dispatch({
    type: "DELETE_TASKS",
    payload: await dataTasks
  });
};

//action : Delete user
export const DeleteSubs = async (dataTasks, dispatch) => {
  await deleteSubs(dataTasks, )
  fetchTasks(dispatch, )
  fetchSubs(dispatch, )
  return dispatch({
    type: "DELETE_SUBS",
    payload: await dataTasks
  });
};

//action : Update Tasks 
export const UpdateTask = async (dataTasks, dispatch) => {
  await updateTask(dataTasks)
  fetchTasks(dispatch)
  fetchSubs(dispatch)
  return dispatch({
    type: "UPDATE_SUBS",
    payload: await dataTasks
  });
};

//action: Move Tasks
export const MoveTask = async ({ id, newStatus }, dataTasks, dispatch) => {
  await updateTask(dataTasks, )
  fetchTasks(dispatch, )
  fetchSubs(dispatch, )
  return dispatch({
    type: "MOVE_TASK",
    payload: {
      id,
      newStatus
    }
  });
};
