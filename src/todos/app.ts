import { todoStore } from '../store';
import { Filters } from '../store/todoStore';
import appHtml from './app.html?raw';
import type { ElementosIds, AppProps } from './appInterface';
import { renderPending, renderTodos } from './useCases';

const ElementIDs: ElementosIds = {
    TodoList: '.todo-list',
    TodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFiltro: '.filtro',
    PendingCount:'#pending-count'

}





export const App: AppProps = (elementId: string): void => {

      const updatePendingCount =() => {
        renderPending(ElementIDs.PendingCount);

    }


    const displayTools = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

  


    //cuando se llama la funcion
    (() => {

        const app = document.createElement('div');
        app.innerHTML = appHtml;
        document.querySelector(elementId).append(app);
        displayTools();
    })();



    //referencias HTML

    const newDescripcion: HTMLInputElement = document.querySelector(ElementIDs.TodoInput);
    const todoListUl: HTMLUListElement = document.querySelector(ElementIDs.TodoList);

    const ClearCompletedButton: HTMLButtonElement = document.querySelector(ElementIDs.ClearCompleted);
    const filterLis: NodeListOf<HTMLLIElement> = document.querySelectorAll(ElementIDs.TodoFiltro);


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
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTools();
    });




    todoListUl.addEventListener('click', (event: MouseEvent) => {
        const target: HTMLElement = event.target as HTMLElement;
        const destroyElement = target.classList.contains('destroy');
        const element = target.closest('[data-id]');

        if (destroyElement) {
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTools();
        }

    })
    ClearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompletados();
        displayTools();
    });

    // filterUl.forEach()
    filterLis.forEach((filter) => {
        filter.addEventListener('click', (filterEvent) => {
            filterLis.forEach(RemoveClass => RemoveClass.classList.remove('selected'));
            const target = filterEvent.target as HTMLElement;
            target.classList.add('selected');
            let filterValue = target.textContent;
           // console.log(filterValue);
            
            /*
            switch(filterValue){
                case
            }*/
           switch(filterValue){
            case 'Todos':
                todoStore.setFiltro(Filters.All);
                break;
            case 'Pendientes':
                todoStore.setFiltro(Filters.pending);
                break;
            case 'Completados':
                todoStore.setFiltro(Filters.completed);
                break;
                
        
           }
           displayTools();

        })
    })



}
