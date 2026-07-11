//import type{ TodoClas } from "./todoInterface";
import { v4 as  uuid } from "uuid";


export class Todo  {
public id:string;
public done:boolean;
public createDate:Date;
    
    constructor (  description:string ){
        this.id = uuid();
        this.done = false;
        this.createDate = new Date();
        
    }

    
}