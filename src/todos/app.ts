import appHtml from './app.html?raw';

interface AppProps{
    (elementId:string):void
    
}


export const App:AppProps = (elementId:string):void => {
    (()=>{

        const app = document.createElement('div');
        app.innerHTML = appHtml;
        document.querySelector(elementId).append(app);
    })();
}