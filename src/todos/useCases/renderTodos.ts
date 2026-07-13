
import {  Todo} from "../models/";
import type { RenderTodoInterface } from "./interfaces/renderTodoInter";


export const renderTodos:RenderTodoInterface =(elementId:string, todos:Todo[]) =>{
 console.log(elementId, todos);
}