import { Todo } from "../todos/models/todoModel";
import type { Filtro, Getodos, Stado } from "./interface/interfaceStore";


const Filters:Filtro = {
    All: "All",
    completed:"completed",
    pending:"pending",
}

const state:Stado ={
    todos:[
        new Todo("piedra alma"),
        new Todo("piedra de la vida"),
        new Todo("piedra del tiempo"),

    ],
    filters:Filters.All
}

const initStore = () =>{
    console.log(state);
    console.log('initstore')
}


const getTodos = (filters: keyof Filtro = Filters.All):Getodos =>{
    //throw new Error("methodo no implementado");
    switch(filters){
        case Filters.All:
         // return state.todos;
         return  [...state.todos];
        case Filters.completed:
            return state.todos.filter(  todos => todos.done);

        case Filters.pending:
            return state.todos.filter(todos => !todos.done);
        
            default: 
            throw new Error(`opcion no valida${filters}`);
    }

}


const loadStore = () =>{
     throw new Error("methodo no implementado");
}

const addTodo = (desciption:string) =>{
    throw new Error("methodo no implementado");
}
//false boolean
const  toggleTodo = (todoId:string)=>{
     throw new Error("methodo no implementado");
}

const  deleteTodo = (todoId:string)=>{
     throw new Error("methodo no implementado");
}
const deleteCompletados = () =>{

    throw new Error("methodo no implementado");
}

const setFiltro = (filtro:Filtro ) => {
    //state.filters = filtro;
    //console.log(filtro)
    throw new Error("methodo no implementado");
}

const getCurrentFilter= () =>{
    throw new Error("methodo no implementado");
}


export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompletados,
    setFiltro,
    getCurrentFilter,
    getTodos,
    
}