import { todoStore } from '../store';
import appHtml from './app.html?raw';

interface AppProps{
    (elementId:string):void
    
}


export const App:AppProps = (elementId:string):void => {


    const displayTools = () => {
     const todos = todoStore.getTodos();
     console.log(todos); 
    }


    //cuando se llama la funcion
    (()=>{

        const app = document.createElement('div');
        app.innerHTML = appHtml;
        document.querySelector(elementId).append(app);
        displayTools();
    })();
}