import type { Todo } from "../../todos/models/todoModel";

export  interface  Filtro {
    All: "All";
    completed: "completed";
    pending: "pending";
}

export interface Stado {
    todos:Todo[]
    filters: "All" | "completed" | "pending"

}