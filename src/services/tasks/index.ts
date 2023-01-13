import { DB_BASE_URL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { Task } from "../../types";

// const getAll = () => {};

// const get = (id: string) => {};

type Payload = Omit<Task, "id">;

const add = async (task: Payload) => {
  const options = {
    method: "POST",
    body: JSON.stringify(task),
  };
  const response = await fetch(`${DB_BASE_URL}/tasks.json`, options);
  const data = await response.json();

  if (data.name) {
    return true;
  } else {
    return false;
  }
};

// const update = () => {};

// const remove = (id: string) => {};

// const getAll = async (search?: string, color?: string): Promise<Category[]> => {
//   const response = await fetch(`${DB_BASE_URL}/categories.json`);
//   const data = await response.json();

//   const categories = mapToArray<Task>(data);

//   return search && color
//     ? tasks
//         .filter((elem) => elem.title.includes(search))
//         .filter((elem) => elem.description.includes(color))
//     : tasks;
// };

// /**
//  *
//  */
// const get = async (id: string): Promise<Task> => {
//   const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`);
//   const data = await response.json();

//   return { id, ...data };
// };

// /**
//  *
//  */

// /**
//  *
//  */
// const update = async ({
//   id,
//   category,
//   date,
//   description,
//   status,
//   title,
// }: Task) => {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify({ id, category, date, description, status, title }),
//   };

//   const response = await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options);
//   const data = await response.json();

//   if (data.name) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const remove = async (id: string) => {
//   const options = {
//     method: "DELETE",
//   };

//   await fetch(`${DB_BASE_URL}/tasks/${id}.json`, options);
// };

export const tasksService = { add };
