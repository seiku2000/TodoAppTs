
import {  Todo} from "../models/";
import { createTodoHtml } from "./createTodoHtml";
import type { RenderTodoInterface } from "./interfaces/renderTodoInter";


export const renderTodos:RenderTodoInterface =(elementId:string, todos:Todo[]) =>{
 console.log(elementId, todos);
 const element =document.querySelector(elementId);
 //console.log(element);
 todos.forEach(todo => {
    element?.append(createTodoHtml(todo))
 })
}
