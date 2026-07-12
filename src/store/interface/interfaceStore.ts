import type { Todo, } from "../../todos/models/todoModel";
//import type { TodoClas } from "../../todos/models/interface/todoInterface";

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
   (filters?: keyof Filtro):Todo[]
  
}

export interface addTodoInterface {
    (desciption:string):void
}

export interface ToGleTodoInterface {
    (todoId:string):void
}

export interface deleteTodoInterface {
    (todoId:string):void
}

export interface deleteCompletadosInterface {
    ():void
}

export interface togleTodoInterface {
    (todoId:string):void
}

export interface setFIlterInterface {
     (filters?: keyof Filtro):void
}
 export interface getCurrentFilterInterface {
    ():Filtro | "All" | "completed" | "pending"

 }
