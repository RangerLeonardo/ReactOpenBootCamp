import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre{"(s)"}: {contact.names}
            </h2>
            <h3>
                Apellidos: {contact.apellidos}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                Estado: {contact.status ? "Contacto En Línea ": "Contacto No Disponible" }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact),
};


export default ContactComponent;
