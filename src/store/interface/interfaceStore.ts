import type { Todo  } from "../../todos/models/todoModel";

export interface Filtro {
    All: "All";
    completed: "completed";
    pending: "pending";
}

export interface Stado {
    todos:Todo[]
    filters:(Filtro) | ( "All" | "completed" | "pending");

    
}

export interface Getodos {
  //  (filters?: keyof Filtro):Todo[]
}