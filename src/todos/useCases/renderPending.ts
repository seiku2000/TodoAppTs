import { todoStore } from "../../store";
import { Filters } from "../../store/todoStore";
import type { RenderPendingInterface } from "./interfaces/renderTodoInter";


let element:HTMLElement |   null;

export const renderPending:RenderPendingInterface  = (elementId:string) =>{
    if(!element)
         element = document.querySelector(elementId);
    if(!Element)
        throw new Error(`elemento ${elementId} no encontrado`);

///element.innerHTML = todoStore.getTodos(Filters.pending).length
element.innerHTML = todoStore.getTodos(Filters.pending).length.toString();


}