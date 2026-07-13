import type { Todo } from "../models";
import type { CreateTodoHtmlInterface } from "./interfaces/renderTodoInter";

export const createTodoHtml:CreateTodoHtmlInterface = (todo:Todo) => {
    const html = `<h1>${todo.description}</h1>`;

    const liElement =document.createElement('li');
     liElement.innerHTML = html;


    return liElement;
}