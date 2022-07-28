// export default class ToDoService {
//     static getAll() {
//         const response = [
//             { title: "Проснуться", completed: false },
//             { title: "Умыться", completed: true },
//             { title: "Захватить весь мир", completed: false },
//         ]
//         return response;
//     }
// }

export function getAll() {
  const response = [
    { title: "Проснуться", completed: false },
    { title: "Умыться", completed: true },
    { title: "Захватить весь мир", completed: false },
  ];
  return response;
}

export * as ToDoService from "./ToDoService";
