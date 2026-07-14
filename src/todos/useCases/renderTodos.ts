
import {  Todo} from "../models/";
import { createTodoHtml } from "./createTodoHtml";
import type { RenderTodoInterface } from "./interfaces/renderTodoInter";
 
let element:HTMLElement 



export const renderTodos:RenderTodoInterface =(elementId:string, todos:Todo[]) =>{
 console.log(elementId, todos);
 //const element =document.querySelector(elementId);
 if(!element) 
   element = document.querySelector(elementId);

 if(!element) 
   throw new Error(`Element ${elementId} not found`);

 element.innerHTML = '';
 
 //console.log(element);
 todos.forEach(todo => {
    element?.append(createTodoHtml(todo))
 })
}
