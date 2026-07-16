import { Todo } from "../todos/models";
import type { addTodoInterface, deleteCompletadosInterface, deleteTodoInterface, Filtro,
              getCurrentFilterInterface,
              Getodos, setFIlterInterface, Stado, 
              ToGleTodoInterface} from "./interface/interfaceStore";


export const Filters:Filtro = {
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
    loadStore();
  //  console.log(state);
    //console.log('initstore')
}
const loadStore = () =>{
    
    // console.log(localStorage.getItem('state'));
     if(!localStorage.getItem('state'))return;

    //forma de tipar objetos desestructurados
     let {todos= [],filters = Filters.All}:    //obteniendo los valores de localStorage
     {todos:Todo[], filters: keyof Filtro} = JSON.parse(localStorage.getItem('state'));
     //console.log(todos,filters);
    // console.log(todos,filters);
    //asignando los valores a el state
    state.todos = todos;
    state.filters = filters;
}

//metodo para guardar el state en el localStorage
const saveStateLocalStorage = () =>{
   // localStorage.setItem('state','hola como esta')
    localStorage.setItem('state',JSON.stringify(state))
}


const getTodos:Getodos = (filters: keyof Filtro = Filters.All)=>{
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




const addTodo:addTodoInterface = (desciption:string) =>{
    //throw new Error("methodo no implementado");
    if(!desciption) throw new Error("descripcion es necesaria")
        state.todos.push(new Todo(desciption));
    saveStateLocalStorage();
}
//false boolean
const  toggleTodo:ToGleTodoInterface = (todoId:string)=>{
    // throw new Error("methodo no implementado");
    state.todos = state.todos.map (todo =>{
        if(todo.id === todoId){
            todo.done =  !todo.done
        }
        return todo;

    })
    saveStateLocalStorage();
  
}

const  deleteTodo:deleteTodoInterface = (todoId:string)=>{
  state.todos = state.todos.filter( todo => todo.id !== todoId)
  saveStateLocalStorage();

}
const deleteCompletados:deleteCompletadosInterface = () =>{

    state.todos = state.todos.filter(todo => !todo.done)
    saveStateLocalStorage();

}

const setFiltro:setFIlterInterface = (filters:keyof Filtro = Filters.All ) => {
    //state.filters = filtro;
    //console.log(filtro)
    //throw new Error("methodo no implementado");
    state.filters = filters;
    saveStateLocalStorage()
}

const getCurrentFilter:getCurrentFilterInterface= () =>{
    //throw new Error("methodo no implementado");
    return state.filters;
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