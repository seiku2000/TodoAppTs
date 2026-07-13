import { todoStore } from '../store';
import appHtml from './app.html?raw';
import type { ElementosIds, AppProps } from './appInterface';
import { renderTodos } from './useCases';

const ElementIDs:ElementosIds  = {
    TodoList: '.todo-list',
}





export const App:AppProps = (elementId:string):void => {


    const displayTools = () => {
     const todos = todoStore.getTodos(todoStore.getCurrentFilter());
     renderTodos(ElementIDs.TodoList,todos);
    }


    //cuando se llama la funcion
    (()=>{

        const app = document.createElement('div');
        app.innerHTML = appHtml;
        document.querySelector(elementId).append(app);
        displayTools();
    })();
}