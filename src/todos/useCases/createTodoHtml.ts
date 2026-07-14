import type { Todo } from "../models";
import type { CreateTodoHtmlInterface } from "./interfaces/renderTodoInter";

export const createTodoHtml:CreateTodoHtmlInterface = (todo:Todo) => {
    
    //<li class="completed" data-id="abc">

    const { id,done,description} = todo
    const html = `
    
                <div class="view">
                    <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> 
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            
    
    `;

    const liElement =document.createElement('li');  
     liElement.innerHTML = html;
     liElement.setAttribute('data-id',id);
     if(done){
        liElement.classList.add('completed');
     }
     


    return liElement;
}