
import {status} from "./status";
export class Contact {
    names="";
    apellidos="";
    email="";
    status=status.conectado;

    constructor(names,apellidos,email,status){
        this.names=names;
        this.apellidos=apellidos;
        this.email=email;
        this.status=status;

    }
}