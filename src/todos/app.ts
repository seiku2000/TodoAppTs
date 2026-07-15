import { todoStore } from '../store';
import appHtml from './app.html?raw';
import type { ElementosIds, AppProps } from './appInterface';
import { renderTodos } from './useCases';

const ElementIDs: ElementosIds = {
    TodoList: '.todo-list',
    TodoInput: '#new-todo-input',
   
}





export const App: AppProps = (elementId: string): void => {


    const displayTools = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
    }


    //cuando se llama la funcion
    (() => {

        const app = document.createElement('div');
        app.innerHTML = appHtml;
        document.querySelector(elementId).append(app);
        displayTools();
    })();



    //referencias HTML

    const newDescripcion = document.querySelector(ElementIDs.TodoInput);
    const todoListUl = document.querySelector(ElementIDs.TodoList);;
    //const DeleteButton = document.querySelector(ElementIDs.TodoDestroy);
    

    newDescripcion.addEventListener('keyup', (event: KeyboardEvent) => {
        //console.log(event);

        //if(event.keyCode !== 13) return;
        if (event.key !== 'Enter') return;
        //if(event.target as .value.trim())
        const target = event.target as HTMLInputElement;
        if (target.value.trim().length === 0) return;
        todoStore.addTodo(target.value);
        displayTools();
        target.value = '';

    });

    todoListUl.addEventListener('click', (event: MouseEvent) => {
        let target = event.target as HTMLElement;
        const element = target.closest('[data-id]');
       // console.log(element)
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTools();
        // console.log(event.target);
        //console.log(target);
    });




    todoListUl.addEventListener('click' ,(event:MouseEvent)=>{
        const target: HTMLElement = event.target as HTMLElement;
        const destroyElement = target.classList.contains('destroy');
        const element =target.closest('[data-id]');

        if(destroyElement){
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTools();
        }

       
 

    })


}