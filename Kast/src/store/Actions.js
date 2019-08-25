import getTask from "../interactions/task.js";
import addTaskFun from "../interactions/addTask.js";
import addSubsFun from "../interactions/addSubs.js";
import deleteTask from "../interactions/deleteTask.js";
import updateTask from "../interactions/updateTask.js";
import getSubs from "../interactions/subs.js";
import deleteSubs from "../interactions/deleteSubs.js";
import { URL_API } from "../utils/enviroment";

//action : get task
export const fetchTasks = async dispatch => {
  const AllTasks = await getTask(URL_API);
  return dispatch({
    type: "FETCH_TASKS",
    payload: await AllTasks
  });
};

//action : get lists Personal of users
export const fetchSubs = async dispatch => {
  const AllSubs = await getSubs(URL_API);
  fetchTasks(dispatch);
  return dispatch({
    type: "FETCH_SUBS",
    payload: await AllSubs
  });
};

//action : Add tasks
export const AddTasks = async (dataTasks, dispatch) => {
  await addTaskFun(dataTasks, URL_API);
  fetchTasks(dispatch, URL_API);
  return dispatch({
    type: "ADD_TASKS",
    payload: await dataTasks
  });
};

//action : Add User to List
export const AddSubs = async (dataTasks, dispatch) => {
  await addSubsFun(dataTasks, URL_API);
  fetchTasks(dispatch, URL_API);
  fetchSubs(dispatch, URL_API);
  return dispatch({
    type: "ADD_SUBS",
    payload: await dataTasks
  });
};

//action : Delete Tasks
export const DeleteTasks = async (dataTasks, dispatch) => {
  await deleteTask(dataTasks, URL_API);
  fetchTasks(dispatch, URL_API);
  fetchSubs(dispatch, URL_API);
  return dispatch({
    type: "DELETE_TASKS",
    payload: await dataTasks
  });
};

//action : Delete user
export const DeleteSubs = async (dataTasks, dispatch) => {
  await deleteSubs(dataTasks, URL_API);
  fetchTasks(dispatch, URL_API);
  fetchSubs(dispatch, URL_API);
  return dispatch({
    type: "DELETE_SUBS",
    payload: await dataTasks
  });
};

//action : Update Tasks
export const UpdateTask = async (dataTasks, dispatch) => {
  await updateTask(dataTasks, URL_API);
  fetchTasks(dispatch, URL_API);
  fetchSubs(dispatch, URL_API);
  return dispatch({
    type: "UPDATE_SUBS",
    payload: await dataTasks
  });
};

//action: Move Tasks
export const MoveTask = async ({ id, newStatus }, dataTasks, dispatch) => {
  await updateTask(dataTasks, URL_API);
  fetchTasks(dispatch, URL_API);
  fetchSubs(dispatch, URL_API);
  return dispatch({
    type: "MOVE_TASK",
    payload: {
      id,
      newStatus
    }
  });
};
