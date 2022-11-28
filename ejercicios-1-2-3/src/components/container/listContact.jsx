import React from 'react';
import { Contact } from '../../models/contact.class';
import { status } from '../../models/status';
import ContactComponent from '../pure/contact';


const ListContact = () => {
    const defaultContact = new Contact("Arturo Yahir","Arriaga Ruíz","arturoyahir@gmail.com",status.conectado);

    return (
        <div>
            <div>
                <h1>Contactos</h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};





export default ListContact;
