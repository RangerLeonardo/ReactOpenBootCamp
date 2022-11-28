import React from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task("Ejemplo","descripción de la tarea",false,Levels.Normal)

    const changeState = (id) =>{
        console.log("Cambiar el estado de una tarea")
    }

    return (
        <div>
            <div>
                <h1>
                Tus Tareas:
                </h1>
            </div>
            {/* Aplicar un for para renderizar toda la lista de tareas que tenemos */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};





export default TaskListComponent;
