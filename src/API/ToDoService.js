import axios from "axios";
export async function getAll() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
}

export * as ToDoService from "./ToDoService";
