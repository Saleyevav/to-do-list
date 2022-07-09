export default class ToDoService {
    static getAll(limit = 10, page = 1) {
        const response = [
            { name: "Проснуться", isDone: false },
            { name: "Умыться", isDone: true },
            { name: "Захватить весь мир", isDone: false },
        ]
        return response;
    }
}