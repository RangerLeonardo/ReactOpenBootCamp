// nombre descripcion y nivel de urgencia

import { Levels } from "./levels.enum";

export class Task {
    name="";
    description = "";
    completed = false;
    level = Levels.Normal;
    
    //Las caracteristicas que va a tener la tarea
    constructor(name, description, completed, level){
        this.name=name;
        this.description=description;
        this.completed=completed;
        this.level=level;
    }
}