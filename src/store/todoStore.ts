import { Todo } from "../todos/models/todoModel";
import type { Filtro, Stado } from "./interface/interfaceStore";


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
export default {
    initStore
}