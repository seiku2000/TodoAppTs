//import type{ TodoClas } from "./todoInterface";


export class Todo  {
public id:number;
public done:boolean;
public createDate:Date;
    
    constructor (  description:string ){
        this.id = 1;
        this.done = false;
        this.createDate = new Date();
        
    }

    
}