import { TYPE_LIST } from "./constants";
//Filter List of Status 
export const filterByList = (type, tasks = []) => {
  return tasks.filter(task => task.status === type);
};
//Select Color by status of tasks 
export const getColorByStatus = type => {
  switch (type) {
    case TYPE_LIST.IN_PROGRESS:
      return "danger";
    case TYPE_LIST.DONE:
      return "success";
    default:
      return "info";
  }
};
export const map = (obj = {}) => {
  return Object.keys(obj).map(key => ({ ...obj[key] }));
};
